// Small formatting utilities (locale-aware)
export const fmtCurrency = (value: number, currency = "USD", locales = undefined) => {
  try {
    return new Intl.NumberFormat(locales, { style: "currency", currency }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
};

export const fmtDate = (iso?: string, opts?: Intl.DateTimeFormatOptions) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString(undefined, opts ?? { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
};

export const shortName = (first?: string, last?: string) => {
  if (!first && !last) return "—";
  return `${first ?? ""} ${last ?? ""}`.trim();
};
