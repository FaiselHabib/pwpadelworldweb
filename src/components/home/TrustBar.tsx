import type { Dictionary } from "@/lib/i18n/dictionaries";

type IconName = "shield" | "courts" | "indoor" | "pin";

export function TrustBar({ dict }: { dict: Dictionary }) {
  const t = dict.trust;
  const items = [
    { label: t.rated, icon: "shield" as IconName },
    { label: t.courts, icon: "courts" as IconName },
    { label: t.indoor, icon: "indoor" as IconName },
    { label: t.location, icon: "pin" as IconName },
  ];

  return (
    <section className="bg-white pt-10 lg:pt-14">
      <div className="container-px">
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-[var(--surface)] px-4 py-3.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Icon name={item.icon} />
              </span>
              <span className="text-sm font-semibold leading-snug text-brand-black">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "shield")
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  if (name === "courts")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="M12 5v14M3 12h18" />
      </svg>
    );
  if (name === "indoor")
    return (
      <svg {...common}>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v9h14v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
