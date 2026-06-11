import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { courts } from "@/lib/mock/courts";
import { toISODate } from "@/lib/format";
import { CourtCard } from "@/components/courts/CourtCard";
import { CourtsComparison } from "@/components/courts/CourtsComparison";
import { notFound } from "next/navigation";

export default async function CourtsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const c = dict.courtsPage;
  const todayISO = toISODate(new Date());

  return (
    <>
      {/* Intro */}
      <section className="container-px pt-12 lg:pt-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
            {c.eyebrow}
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-brand-black/65 sm:text-lg">
            {c.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3.5 py-1.5 text-sm font-semibold text-brand-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              {c.indoorCountLabel} · {c.availableNow}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3.5 py-1.5 text-sm font-semibold text-brand-green">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              {c.outdoorCountLabel} · {c.availableNow}
            </span>
          </div>
        </div>
      </section>

      {/* Court grid */}
      <section className="container-px py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courts.map((court) => (
            <CourtCard
              key={court.id}
              locale={locale}
              dict={dict}
              court={court}
              todayISO={todayISO}
            />
          ))}
        </div>
      </section>

      {/* Comparison */}
      <CourtsComparison locale={locale} dict={dict} />
    </>
  );
}
