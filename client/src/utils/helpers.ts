// General helpers
export const uid = (prefix = "id") => `${prefix}_${Math.random().toString(36).slice(2, 9)}`;

export const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));

export const safeParseJSON = <T = any>(s: string | null, fallback: T) => {
  if (!s) return fallback;
  try {
    return JSON.parse(s) as T;
  } catch {
    return fallback;
  }
};
