import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Court } from "@/types/booking";
import { getSlots } from "@/lib/mock/slots";
import { formatPrice, formatTime, localizeDigits } from "@/lib/format";
import { cn } from "@/lib/cn";

export function CourtCard({
  locale,
  dict,
  court,
  todayISO,
}: {
  locale: Locale;
  dict: Dictionary;
  court: Court;
  todayISO: string;
}) {
  const c = dict.courtsPage;
  const isIndoor = court.type === "indoor";
  const bookHref = `/${locale}/booking?court=${court.id}`;

  // Live mock availability — every court (indoor and outdoor) is bookable today.
  const slots = getSlots(court.id, todayISO);
  const openTimes = slots.filter((s) => s.available).map((s) => s.start);

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border bg-white shadow-card transition-all",
        isIndoor ? "border-brand-gold/30 hover:border-brand-gold/60" : "border-black/[0.08] hover:border-brand-green/40",
      )}
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={court.image}
          alt={court.name[locale]}
          width={720}
          height={450}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute start-4 top-4 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
              isIndoor ? "bg-brand-black/85 text-brand-gold-light" : "bg-brand-green text-white",
            )}
          >
            {isIndoor ? dict.booking.indoor : dict.booking.outdoor}
          </span>
          {isIndoor && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-black">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="m12 2 2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2Z" />
              </svg>
              {c.premium}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-extrabold tracking-tight text-brand-black">
          {court.name[locale]}
        </h3>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {court.features[locale].map((feat) => (
            <span
              key={feat}
              className="rounded-full bg-[var(--surface)] px-2.5 py-0.5 text-xs text-brand-black/60"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Availability preview */}
        <div className="mt-4 rounded-xl bg-[var(--surface)] p-3">
          {openTimes.length === 0 ? (
            <p className="text-sm font-medium text-brand-black/50">{c.fullyBooked}</p>
          ) : (
            <>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-black/50">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                {c.availabilityLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-green">
                {localizeDigits(openTimes.length, locale)} {c.slotsOpen}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {openTimes.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-brand-black/70 ring-1 ring-black/[0.06]"
                  >
                    {formatTime(t, locale)}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-5 flex items-end justify-between gap-3 pt-1">
          <p>
            <span className="text-xl font-extrabold text-brand-green">
              {formatPrice(court.pricePer90, locale, dict.common.sar)}
            </span>
            <span className="text-sm text-brand-black/50"> {dict.common.perSession}</span>
          </p>
        </div>

        <Link
          href={bookHref}
          className={cn(
            "mt-4 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-colors",
            isIndoor
              ? "bg-brand-black text-white hover:bg-brand-black/90"
              : "bg-brand-green text-white hover:bg-brand-green-dark",
          )}
        >
          {c.bookCta}
        </Link>
      </div>
    </div>
  );
}
