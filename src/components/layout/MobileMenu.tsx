"use client";

import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  bookHref: string;
  bookLabel: string;
}

export function MobileMenu({ open, onClose, links, bookHref, bookLabel }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 top-0 bg-white p-5 shadow-card">
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-brand-black">PW Padel World</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <nav className="mt-4 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-3 py-3 text-base font-medium text-brand-black/90 hover:bg-brand-green/10 hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={bookHref}
            onClick={onClose}
            className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-5 text-base font-semibold text-white"
          >
            {bookLabel}
          </Link>
        </nav>
      </div>
    </div>
  );
}
