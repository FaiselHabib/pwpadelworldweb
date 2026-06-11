import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function FacilitiesSection({ dict }: { dict: Dictionary }) {
  const f = dict.facilities;

  return (
    <section className="bg-[var(--surface)] py-20 lg:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-green">
            {f.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {f.title}
          </h2>
          <p className="mt-4 text-base text-brand-black/65 sm:text-lg">{f.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Two large image cards (real photos) */}
          <ImageCard
            image="/images/court-4.jpg"
            title={f.outdoorTitle}
            desc={f.outdoorDesc}
            className="md:col-span-1 lg:col-span-2"
          />
          <ImageCard
            image="/images/facility-1.jpg"
            title={f.cafeTitle}
            desc={f.cafeDesc}
          />

          {/* Icon cards */}
          <IconCard icon="snow" title={f.indoorTitle} desc={f.indoorDesc} />
          <IconCard icon="bag" title={f.shopTitle} desc={f.shopDesc} />
          <IconCard icon="locker" title={f.changingTitle} desc={f.changingDesc} />
        </div>
      </div>
    </section>
  );
}

function ImageCard({
  image,
  title,
  desc,
  className = "",
}: {
  image: string;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl shadow-card ${className}`}
    >
      <Image
        src={image}
        alt={title}
        width={900}
        height={600}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 max-w-md text-sm text-white/80">{desc}</p>
      </div>
    </article>
  );
}

function IconCard({
  icon,
  title,
  desc,
}: {
  icon: "snow" | "bag" | "locker";
  title: string;
  desc: string;
}) {
  return (
    <article className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-card transition-colors hover:border-brand-green/40">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
        <Icon name={icon} />
      </span>
      <h3 className="mt-4 text-lg font-bold text-brand-black">{title}</h3>
      <p className="mt-1 text-sm text-brand-black/60">{desc}</p>
    </article>
  );
}

function Icon({ name }: { name: "snow" | "bag" | "locker" }) {
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
  if (name === "bag")
    return (
      <svg {...common}>
        <path d="M6 7h12l1 14H5L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <line x1="12" y1="8" x2="12" y2="11" />
    </svg>
  );
}
