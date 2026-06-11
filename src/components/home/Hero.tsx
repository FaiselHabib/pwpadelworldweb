import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ButtonLink } from "@/components/ui/Button";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const h = dict.hero;

  const stats = [
    { value: h.stat1Value, label: h.stat1Label },
    { value: h.stat2Value, label: h.stat2Label },
    { value: h.stat3Value, label: h.stat3Label },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-brand-black text-white">
      <Image
        src="/images/court-night.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />
      {/* Legibility + brand gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent" />

      <div className="container-px relative flex min-h-[88vh] flex-col justify-center py-20 lg:min-h-[90vh]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-gold-light backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green-light" />
            {h.badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">{h.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={`${base}/booking`} variant="primary" size="lg" className="shadow-card">
              {h.bookCta}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rtl:rotate-180">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </ButtonLink>
            <ButtonLink href={`${base}/courts`} variant="ghost" size="lg">
              {h.exploreCta}
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold text-brand-green-light sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
