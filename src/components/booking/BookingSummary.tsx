import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Court } from "@/types/booking";
import { formatPrice, formatFullDate, formatTime } from "@/lib/format";

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-brand-black/50">{label}</span>
      <span className="font-semibold text-brand-black">{value}</span>
    </div>
  );
}

export function BookingSummary({
  locale,
  dict,
  court,
  date,
  time,
}: {
  locale: Locale;
  dict: Dictionary;
  court?: Court;
  date?: string;
  time?: string;
}) {
  const b = dict.booking;

  return (
    <div className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold uppercase tracking-wide text-brand-black/80">
        {b.summaryTitle}
      </h3>

      {!court ? (
        <p className="mt-4 text-sm text-brand-black/45">{b.summaryEmpty}</p>
      ) : (
        <div className="mt-4">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={court.image}
              alt={court.name[locale]}
              width={400}
              height={200}
              className="aspect-[2/1] w-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2.5">
            <Line label={b.labelCourt} value={court.name[locale]} />
            {date && <Line label={b.labelDate} value={formatFullDate(date, locale)} />}
            {time && <Line label={b.labelTime} value={formatTime(time, locale)} />}
            <Line label={b.labelDuration} value={b.duration90} />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-black/[0.07] pt-4">
            <span className="text-sm font-medium text-brand-black/60">{b.summaryTotal}</span>
            <span className="text-xl font-extrabold text-brand-green">
              {formatPrice(court.pricePer90, locale, dict.common.sar)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
