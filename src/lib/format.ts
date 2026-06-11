import type { Locale } from "./i18n/config";

const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/** Convert Western digits in a string to Arabic-Indic digits for the ar locale. */
export function localizeDigits(input: string | number, locale: Locale): string {
  const str = String(input);
  if (locale !== "ar") return str;
  return str.replace(/[0-9]/g, (d) => arabicDigits[Number(d)]);
}

/** Format a price like "200 SAR" / "٢٠٠ ريال". */
export function formatPrice(amount: number, locale: Locale, sar: string): string {
  return `${localizeDigits(amount, locale)} ${sar}`;
}

/** Format a "HH:mm" 24h time for display, localizing digits. */
export function formatTime(hhmm: string, locale: Locale): string {
  return localizeDigits(hhmm, locale);
}

/** Weekday short name for an ISO date (yyyy-mm-dd) via Intl. */
export function weekdayShort(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    weekday: "short",
  }).format(d);
}

/** Day-of-month number, localized. */
export function dayNumber(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T00:00:00`);
  return localizeDigits(d.getDate(), locale);
}

/** Full readable date, e.g. "Mon, 15 Jun" / Arabic equivalent. */
export function formatFullDate(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(d);
}

/** ISO yyyy-mm-dd string for a Date in local time. */
export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
