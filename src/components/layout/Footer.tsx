import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const links = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/courts`, label: dict.nav.courts },
    { href: `${base}/booking`, label: dict.nav.booking },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-black text-white">
      <div className="container-px grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt="PW Padel World"
            width={56}
            height={56}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">{dict.footer.tagline}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-3 py-1 text-xs font-semibold text-brand-gold-light">
            {dict.footer.certified}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">
            {dict.footer.explore}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-green-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">
            {dict.footer.contact}
          </h3>
          <p className="mt-4 text-sm text-white/70">{dict.footer.location}</p>
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-white/50">{dict.footer.followUs}</p>
            <a
              href="https://www.instagram.com/padelworld.jed"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-semibold text-white transition-colors hover:text-brand-green-light"
            >
              @padelworld.jed
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <span>© {year} PW Padel World. {dict.footer.rights}</span>
          <span>pwpadelworld.com</span>
        </div>
      </div>
    </footer>
  );
}
