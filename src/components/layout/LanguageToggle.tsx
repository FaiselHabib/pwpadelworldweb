"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const target: Locale = locale === "ar" ? "en" : "ar";

  // Swap the leading locale segment, preserving the rest of the path.
  const rest = pathname.replace(/^\/(en|ar)/, "");
  const href = `/${target}${rest || ""}`;

  return (
    <Link
      href={href}
      aria-label={target === "ar" ? "التبديل إلى العربية" : "Switch to English"}
      className="inline-flex h-9 items-center rounded-full border border-black/10 px-3 text-sm font-semibold text-brand-black transition-colors hover:border-brand-green hover:text-brand-green"
    >
      {target === "ar" ? "العربية" : "EN"}
    </Link>
  );
}
