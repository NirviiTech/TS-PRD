// Lightweight validators used by forms
export const isEmail = (s?: string) => !!s && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const isPhone = (s?: string) => {
  if (!s) return false;
  // Basic international-friendly check (E.164-ish)
  return /^\+?[0-9\-().\s]{7,20}$/.test(s);
};

export const between = (n: number, min: number, max: number) => n >= min && n <= max;
