import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, stepCountIs } from 'ai';
import { systemPrompt } from './prompt';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getSkills } from './tools/getSkills';
import { getExperience } from './tools/getExperience';
import { getEducation } from './tools/getEducation';
import { getContact } from './tools/getContact';
import { getResume } from './tools/getResume';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const tools = {
    getPresentation,
    getProjects,
    getSkills,
    getExperience,
    getEducation,
    getContact,
    getResume,
  };

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: systemPrompt,
    messages: await convertToModelMessages(messages, { tools }),
    tools,
    stopWhen: stepCountIs(2),
    toolChoice: 'auto',
  });

  return result.toUIMessageStreamResponse({ originalMessages: messages });
}
