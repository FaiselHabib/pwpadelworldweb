import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { courts } from "@/lib/mock/courts";
import { SLOT_TIMES, getSlots } from "@/lib/mock/slots";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { notFound } from "next/navigation";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ court?: string; date?: string; time?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const { court, date, time } = await searchParams;

  const initialCourtId = court && courts.some((c) => c.id === court) ? court : undefined;
  const initialDate = date && ISO_DATE.test(date) ? date : undefined;

  // Only carry over the time when it maps to a real, still-available slot.
  let initialTime: string | undefined;
  if (time && SLOT_TIMES.includes(time) && initialCourtId && initialDate) {
    const slot = getSlots(initialCourtId, initialDate).find((s) => s.start === time);
    if (slot?.available) initialTime = time;
  }

  return (
    <BookingFlow
      locale={locale}
      dict={dict}
      initialCourtId={initialCourtId}
      initialDate={initialDate}
      initialTime={initialTime}
    />
  );
}
