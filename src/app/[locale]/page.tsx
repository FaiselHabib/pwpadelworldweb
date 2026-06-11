import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Hero } from "@/components/home/Hero";
import { QuickBooking } from "@/components/home/QuickBooking";
import { TrustBar } from "@/components/home/TrustBar";
import { TransformationSection } from "@/components/home/TransformationSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { WhyBookDirect } from "@/components/home/WhyBookDirect";
import { BookingCTA } from "@/components/home/BookingCTA";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <QuickBooking locale={locale} dict={dict} />
      <TrustBar dict={dict} />
      <TransformationSection locale={locale} dict={dict} />
      <FacilitiesSection dict={dict} />
      <WhyBookDirect locale={locale} dict={dict} />
      <BookingCTA locale={locale} dict={dict} />
    </>
  );
}
