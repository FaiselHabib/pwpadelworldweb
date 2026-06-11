"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/courts`, label: dict.nav.courts },
    { href: `${base}/booking`, label: dict.nav.booking },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-md">
      <div className="container-px flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href={base} className="flex items-center" aria-label="PW Padel World">
          <Image
            src="/images/logo.png"
            alt="PW Padel World"
            width={48}
            height={48}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-brand-black/80 transition-colors hover:bg-brand-green/10 hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} />
          <Link
            href={`${base}/booking`}
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-brand-green px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-green-dark"
          >
            {dict.nav.bookNow}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        links={links}
        bookHref={`${base}/booking`}
        bookLabel={dict.nav.bookNow}
      />
    </header>
  );
}
