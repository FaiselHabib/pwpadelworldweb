import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ButtonLink } from "@/components/ui/Button";

export function WhyBookDirect({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const w = dict.whyBook;
  const items = [
    { title: w.item1Title, body: w.item1Body, icon: "bolt" },
    { title: w.item2Title, body: w.item2Body, icon: "tag" },
    { title: w.item3Title, body: w.item3Body, icon: "calendar" },
    { title: w.item4Title, body: w.item4Body, icon: "layers" },
  ] as const;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-green">
            {w.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {w.title}
          </h2>
          <p className="mt-4 text-base text-brand-black/65 sm:text-lg">{w.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/[0.06] bg-[var(--surface)] p-6 transition-shadow hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-black">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-black/60">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href={`/${locale}/booking`} variant="primary" size="lg" className="shadow-card">
            {w.cta}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rtl:rotate-180">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: "bolt" | "tag" | "calendar" | "layers" }) {
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
  if (name === "bolt")
    return (
      <svg {...common}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );
  if (name === "tag")
    return (
      <svg {...common}>
        <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
    );
  if (name === "calendar")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M2 14l10 5 10-5" />
    </svg>
  );
}
