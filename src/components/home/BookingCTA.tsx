import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ButtonLink } from "@/components/ui/Button";

export function BookingCTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.bookingCta;

  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="container-px">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-black px-6 py-16 text-center sm:px-12 lg:py-20">
          <Image
            src="/images/court-3.jpg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/80 to-brand-black/80" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {c.title}
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">{c.subtitle}</p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <ButtonLink href={`/${locale}/booking`} variant="primary" size="lg" className="shadow-card">
                {c.button}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rtl:rotate-180">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </ButtonLink>
              <span className="text-sm text-white/70">{c.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
