import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ButtonLink } from "@/components/ui/Button";

export function TransformationSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.transformation;
  const points = [
    { title: t.point1Title, body: t.point1Body, icon: "snow" },
    { title: t.point2Title, body: t.point2Body, icon: "trophy" },
    { title: t.point3Title, body: t.point3Body, icon: "clock" },
  ] as const;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="relative order-last lg:order-first">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/court-4.jpg"
                alt={t.title}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white rtl:left-auto rtl:right-5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {t.eyebrow}
              </span>
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl bg-brand-green/15 rtl:-left-4 rtl:right-auto" />
          </div>

          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              {t.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-black/70 sm:text-lg">
              {t.body}
            </p>

            <ul className="mt-8 space-y-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-black">{p.title}</h3>
                    <p className="mt-0.5 text-sm text-brand-black/60">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <ButtonLink href={`/${locale}/booking`} variant="primary" size="lg">
                {t.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: "snow" | "trophy" | "clock" }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "snow")
    return (
      <svg {...common}>
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </svg>
    );
  if (name === "trophy")
    return (
      <svg {...common}>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
