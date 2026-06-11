import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { PRICING } from "@/lib/mock/courts";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function CourtsComparison({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.courtsPage;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-gold">
            {c.compareEyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {c.compareTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-black/65">{c.compareSubtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Current indoor court — available now and bookable */}
          <Panel
            tone="indoor"
            comingSoon={false}
            title={c.currentTitle}
            tag={c.currentTag}
            price={formatPrice(PRICING.indoorPer90, locale, dict.common.sar)}
            perSession={dict.common.perSession}
            features={c.currentFeatures}
            ctaLabel={c.currentCta}
            href={`/${locale}/booking?court=indoor-1`}
          />
          {/* Future indoor expansion — outdoor courts converting, book outdoor now */}
          <Panel
            tone="outdoor"
            comingSoon
            title={c.futureTitle}
            tag={c.futureTag}
            price={formatPrice(PRICING.outdoorPer90, locale, dict.common.sar)}
            perSession={dict.common.perSession}
            features={c.futureFeatures}
            ctaLabel={c.futureCta}
            href={`/${locale}/booking?court=outdoor-1`}
          />
        </div>
      </div>
    </section>
  );
}

function Panel({
  tone,
  comingSoon,
  title,
  tag,
  price,
  perSession,
  features,
  ctaLabel,
  href,
}: {
  tone: "outdoor" | "indoor";
  comingSoon: boolean;
  title: string;
  tag: string;
  price: string;
  perSession: string;
  features: string[];
  ctaLabel: string;
  href: string;
}) {
  const indoor = tone === "indoor";
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl p-7",
        indoor
          ? "bg-gradient-to-br from-brand-black to-[#1c1c1c] text-white"
          : "border border-black/[0.08] bg-white text-brand-black shadow-card",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
            indoor ? "bg-brand-gold/15 text-brand-gold-light" : "bg-brand-green/10 text-brand-green",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              comingSoon && "animate-pulse",
              indoor ? "bg-brand-gold-light" : "bg-brand-green",
            )}
          />
          {tag}
        </span>
      </div>

      <p className="mt-4">
        <span
          className={cn(
            "text-3xl font-extrabold",
            indoor ? "text-brand-gold-light" : "text-brand-green",
          )}
        >
          {price}
        </span>
        <span className={cn("text-sm", indoor ? "text-white/55" : "text-brand-black/50")}>
          {" "}
          {perSession}
        </span>
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                indoor ? "bg-brand-gold/20 text-brand-gold-light" : "bg-brand-green/12 text-brand-green",
              )}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span className={indoor ? "text-white/80" : "text-brand-black/70"}>{feat}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "mt-7 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-colors",
          indoor
            ? "bg-white text-brand-black hover:bg-white/90"
            : "bg-brand-green text-white hover:bg-brand-green-dark",
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
