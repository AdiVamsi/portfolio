export const DAILY_QUESTION_LIMIT = 15;

const COOKIE_NAME = 'pf_daily_q';

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

function msUntilNextUTCMidnight(): number {
  const now = new Date();
  const nextMidnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  return nextMidnight - now.getTime();
}

function parseCookies(header: string | null): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!header) return cookies;
  for (const part of header.split(';')) {
    const separatorIndex = part.indexOf('=');
    if (separatorIndex === -1) continue;
    const key = part.slice(0, separatorIndex).trim();
    const value = part.slice(separatorIndex + 1).trim();
    if (key) cookies[key] = decodeURIComponent(value);
  }
  return cookies;
}

/**
 * Cookie-based daily question counter. Works with zero configuration but is
 * bypassable by clearing cookies or switching browsers/devices. If a shared
 * store (e.g. Upstash Redis) is added later, swap this for an IP-keyed lookup.
 */
export function checkDailyQuestionLimit(req: Request): {
  allowed: boolean;
  remaining: number;
  setCookie: string;
} {
  const cookies = parseCookies(req.headers.get('cookie'));
  const today = todayUTC();
  const [date, countStr] = (cookies[COOKIE_NAME] ?? '').split(':');
  const count = date === today ? Number(countStr) || 0 : 0;

  const allowed = count < DAILY_QUESTION_LIMIT;
  const nextCount = allowed ? count + 1 : count;
  const remaining = Math.max(0, DAILY_QUESTION_LIMIT - nextCount);

  const maxAge = Math.ceil(msUntilNextUTCMidnight() / 1000);
  const setCookie = `${COOKIE_NAME}=${today}:${nextCount}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;

  return { allowed, remaining, setCookie };
}

/** Reads the remaining-question count from `document.cookie` for client-side display. */
export function getRemainingQuestionsFromCookie(cookieString: string): number | null {
  const match = cookieString.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return null;

  const [date, countStr] = decodeURIComponent(match[1]).split(':');
  if (date !== todayUTC()) return DAILY_QUESTION_LIMIT;

  const count = Number(countStr) || 0;
  return Math.max(0, DAILY_QUESTION_LIMIT - count);
}
