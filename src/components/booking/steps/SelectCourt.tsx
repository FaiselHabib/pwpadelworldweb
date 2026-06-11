import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Court } from "@/types/booking";
import { courts } from "@/lib/mock/courts";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function SelectCourt({
  locale,
  dict,
  selectedId,
  onSelect,
}: {
  locale: Locale;
  dict: Dictionary;
  selectedId?: string;
  onSelect: (court: Court) => void;
}) {
  return (
    <div>
      <StepHeading title={dict.booking.selectCourtTitle} subtitle={dict.booking.selectCourtSubtitle} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {courts.map((court) => {
          const selected = court.id === selectedId;
          return (
            <button
              key={court.id}
              type="button"
              onClick={() => onSelect(court)}
              aria-pressed={selected}
              className={cn(
                "group overflow-hidden rounded-2xl border bg-white text-start transition-all",
                selected
                  ? "border-brand-green ring-2 ring-brand-green"
                  : "border-black/[0.08] hover:border-brand-green/50",
              )}
            >
              <div className="relative">
                <Image
                  src={court.image}
                  alt={court.name[locale]}
                  width={600}
                  height={360}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="aspect-[16/9] w-full object-cover"
                />
                <span
                  className={cn(
                    "absolute top-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
                    "start-3",
                    court.type === "indoor"
                      ? "bg-brand-black/85 text-brand-gold-light"
                      : "bg-brand-green text-white",
                  )}
                >
                  {court.type === "indoor" ? dict.booking.indoor : dict.booking.outdoor}
                </span>
                {selected && (
                  <span className="absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-brand-black">{court.name[locale]}</h3>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {court.features[locale].map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full bg-[var(--surface)] px-2.5 py-0.5 text-xs text-brand-black/60"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm">
                  <span className="text-lg font-extrabold text-brand-green">
                    {formatPrice(court.pricePer90, locale, dict.common.sar)}
                  </span>
                  <span className="text-brand-black/50"> {dict.common.perSession}</span>
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StepHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-brand-black">{title}</h2>
      <p className="mt-1 text-sm text-brand-black/60">{subtitle}</p>
    </div>
  );
}
