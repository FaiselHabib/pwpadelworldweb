"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { BookingState, Court, PlayerInfo as PlayerInfoType } from "@/types/booking";
import { courts } from "@/lib/mock/courts";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

import { Stepper } from "./Stepper";
import { BookingSummary } from "./BookingSummary";
import { SelectCourt } from "./steps/SelectCourt";
import { SelectDate } from "./steps/SelectDate";
import { SelectTime } from "./steps/SelectTime";
import { PlayerInfo } from "./steps/PlayerInfo";
import { ReviewBooking } from "./steps/ReviewBooking";
import { Confirmation } from "./steps/Confirmation";

type Field = keyof PlayerInfoType;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function generateReference(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return `PW-${out}`;
}

export function BookingFlow({
  locale,
  dict,
  initialCourtId,
  initialDate,
  initialTime,
}: {
  locale: Locale;
  dict: Dictionary;
  initialCourtId?: string;
  initialDate?: string;
  initialTime?: string;
}) {
  const b = dict.booking;
  // When arriving from Quick Booking / a court deep link, jump ahead to the
  // earliest step the prefilled selection hasn't already satisfied.
  const initialStep = initialCourtId && initialDate ? 3 : 1;
  const [step, setStep] = useState(initialStep);
  const [state, setState] = useState<BookingState>({
    courtId: initialCourtId,
    date: initialDate,
    time: initialTime,
    info: { name: "", phone: "", email: "" },
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [reference, setReference] = useState("");

  const court = useMemo<Court | undefined>(
    () => courts.find((c) => c.id === state.courtId),
    [state.courtId],
  );

  function selectCourt(c: Court) {
    setState((s) => ({ ...s, courtId: c.id, time: undefined }));
  }
  function selectDate(iso: string) {
    setState((s) => ({ ...s, date: iso, time: undefined }));
  }
  function selectTime(time: string) {
    setState((s) => ({ ...s, time }));
  }
  function changeInfo(field: Field, value: string) {
    setState((s) => ({ ...s, info: { ...s.info, [field]: value } }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validateInfo(): boolean {
    const next: Partial<Record<Field, string>> = {};
    if (state.info.name.trim().length < 2) next.name = b.errRequired;
    const digits = state.info.phone.replace(/\D/g, "");
    if (!state.info.phone.trim()) next.phone = b.errRequired;
    else if (digits.length < 9) next.phone = b.errPhone;
    if (!state.info.email.trim()) next.email = b.errRequired;
    else if (!EMAIL_RE.test(state.info.email)) next.email = b.errEmail;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const canProceed =
    (step === 1 && !!state.courtId) ||
    (step === 2 && !!state.date) ||
    (step === 3 && !!state.time) ||
    step === 4 ||
    step === 5;

  function handleNext() {
    if (step === 4 && !validateInfo()) return;
    if (step === 5) {
      setReference(generateReference());
      setStep(6);
      return;
    }
    setStep((s) => Math.min(s + 1, 6));
  }
  function handleBack() {
    setStep((s) => Math.max(s - 1, 1));
  }
  function resetFlow() {
    setState({ info: { name: "", phone: "", email: "" } });
    setErrors({});
    setReference("");
    setStep(1);
  }

  const isConfirmation = step === 6;
  const primaryLabel = step === 5 ? b.confirmBooking : b.next;

  return (
    <div className="container-px py-8 lg:py-12">
      <header className="mb-6 lg:mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-black">{b.title}</h1>
        <p className="mt-1 text-brand-black/60">{b.subtitle}</p>
      </header>

      {!isConfirmation && (
        <div className="mb-8">
          <Stepper locale={locale} dict={dict} current={step} />
        </div>
      )}

      <div className={cn("grid gap-8", !isConfirmation && "lg:grid-cols-[1fr_360px]")}>
        {/* Main column */}
        <div className={cn(!isConfirmation && "pb-28 lg:pb-0")}>
          {step === 1 && (
            <SelectCourt locale={locale} dict={dict} selectedId={state.courtId} onSelect={selectCourt} />
          )}
          {step === 2 && (
            <SelectDate locale={locale} dict={dict} selectedDate={state.date} onSelect={selectDate} />
          )}
          {step === 3 && (
            <SelectTime
              locale={locale}
              dict={dict}
              courtId={state.courtId}
              date={state.date}
              selectedTime={state.time}
              onSelect={selectTime}
            />
          )}
          {step === 4 && (
            <PlayerInfo dict={dict} info={state.info} errors={errors} onChange={changeInfo} />
          )}
          {step === 5 && court && state.date && state.time && (
            <ReviewBooking
              locale={locale}
              dict={dict}
              court={court}
              date={state.date}
              time={state.time}
              info={state.info}
              onEdit={(s) => setStep(s)}
            />
          )}
          {isConfirmation && court && state.date && state.time && (
            <Confirmation
              locale={locale}
              dict={dict}
              court={court}
              date={state.date}
              time={state.time}
              reference={reference}
              onBookAnother={resetFlow}
            />
          )}

          {/* Desktop nav */}
          {!isConfirmation && (
            <div className="mt-8 hidden items-center justify-between lg:flex">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold text-brand-black transition-colors hover:bg-black/[0.04] disabled:opacity-0"
              >
                {b.back}
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                className="inline-flex h-12 items-center rounded-full bg-brand-green px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                {primaryLabel}
              </button>
            </div>
          )}
        </div>

        {/* Desktop sticky summary */}
        {!isConfirmation && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <BookingSummary locale={locale} dict={dict} court={court} date={state.date} time={state.time} />
            </div>
          </aside>
        )}
      </div>

      {/* Mobile sticky bottom bar */}
      {!isConfirmation && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/[0.08] bg-white/95 backdrop-blur-md lg:hidden">
          <div className="container-px flex items-center justify-between gap-3 py-3">
            <div className="min-w-0">
              {court ? (
                <>
                  <p className="truncate text-xs text-brand-black/55">{court.name[locale]}</p>
                  <p className="text-lg font-extrabold text-brand-green">
                    {formatPrice(court.pricePer90, locale, dict.common.sar)}
                  </p>
                </>
              ) : (
                <p className="text-sm text-brand-black/50">{b.summaryEmpty}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex h-12 items-center rounded-full px-4 text-sm font-semibold text-brand-black"
                >
                  {b.back}
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                className="inline-flex h-12 items-center rounded-full bg-brand-green px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                {primaryLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
