import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Court, PlayerInfo } from "@/types/booking";
import { StepHeading } from "./SelectCourt";
import { formatPrice, formatFullDate, formatTime } from "@/lib/format";
import { localizeDigits } from "@/lib/format";

function Row({
  label,
  value,
  onEdit,
  editLabel,
}: {
  label: string;
  value: string;
  onEdit?: () => void;
  editLabel: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-3.5">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-brand-black/45">{label}</p>
        <p className="truncate font-semibold text-brand-black">{value}</p>
      </div>
      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="shrink-0 rounded-full px-3 py-1 text-sm font-semibold text-brand-green hover:bg-brand-green/10"
        >
          {editLabel}
        </button>
      )}
    </div>
  );
}

export function ReviewBooking({
  locale,
  dict,
  court,
  date,
  time,
  info,
  onEdit,
}: {
  locale: Locale;
  dict: Dictionary;
  court: Court;
  date: string;
  time: string;
  info: PlayerInfo;
  onEdit: (step: number) => void;
}) {
  const b = dict.booking;
  return (
    <div>
      <StepHeading title={b.reviewTitle} subtitle={b.reviewSubtitle} />
      <div className="mt-6 overflow-hidden rounded-2xl border border-black/[0.08] bg-white px-5 divide-y divide-black/[0.06]">
        <Row label={b.labelCourt} value={court.name[locale]} editLabel={b.edit} onEdit={() => onEdit(1)} />
        <Row label={b.labelDate} value={formatFullDate(date, locale)} editLabel={b.edit} onEdit={() => onEdit(2)} />
        <Row label={b.labelTime} value={`${formatTime(time, locale)} · ${b.duration90}`} editLabel={b.edit} onEdit={() => onEdit(3)} />
        <Row
          label={b.labelPlayer}
          value={`${info.name} · ${localizeDigits(info.phone, locale)}`}
          editLabel={b.edit}
          onEdit={() => onEdit(4)}
        />
      </div>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-brand-black px-5 py-4 text-white">
        <span className="text-sm font-medium text-white/80">{b.labelTotal}</span>
        <span className="text-2xl font-extrabold text-brand-green-light">
          {formatPrice(court.pricePer90, locale, dict.common.sar)}
        </span>
      </div>
    </div>
  );
}
