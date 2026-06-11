import { convertToModelMessages, streamText, stepCountIs } from 'ai';
import { systemPrompt } from './prompt';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getSkills } from './tools/getSkills';
import { getExperience } from './tools/getExperience';
import { getEducation } from './tools/getEducation';
import { getContact } from './tools/getContact';
import { getResume } from './tools/getResume';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { checkDailyQuestionLimit, DAILY_QUESTION_LIMIT } from '@/lib/dailyLimit';
import { google } from '@ai-sdk/google';

export const maxDuration = 30;

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return Response.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: 'Missing or empty messages array' }, { status: 400 });
  }

  const daily = checkDailyQuestionLimit(req);
  if (!daily.allowed) {
    return Response.json(
      {
        error:
          `I keep this assistant capped at ${DAILY_QUESTION_LIMIT} questions a day to keep it sustainable, ` +
          `and you've reached that limit. It resets at midnight UTC — in the meantime, feel free to grab my ` +
          `résumé or reach out directly at adivamsi1998@gmail.com.`,
      },
      { status: 429, headers: { 'Set-Cookie': daily.setCookie } },
    );
  }

  const tools = {
    getPresentation,
    getProjects,
    getSkills,
    getExperience,
    getEducation,
    getContact,
    getResume,
  };

  // Normalize messages: ensure every message has a `parts` array
  // (DefaultChatTransport sends UIMessages with `parts`, but older
  // clients or direct calls may send plain {role, content} messages)
  const normalized = messages.map((msg: Record<string, unknown>) => {
    if (msg.parts) return msg;
    return {
      ...msg,
      parts: [{ type: 'text', text: String(msg.content ?? '') }],
    };
  }) as Parameters<typeof convertToModelMessages>[0];

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: systemPrompt,
    messages: await convertToModelMessages(normalized, { tools }),
    tools,
    stopWhen: stepCountIs(2),
    toolChoice: 'auto',
  });

  const response = result.toUIMessageStreamResponse({ originalMessages: messages });
  response.headers.set('Set-Cookie', daily.setCookie);
  return response;
}
