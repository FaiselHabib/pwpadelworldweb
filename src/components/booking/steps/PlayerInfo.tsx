import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { PlayerInfo as PlayerInfoType } from "@/types/booking";
import { StepHeading } from "./SelectCourt";
import { cn } from "@/lib/cn";

type Field = keyof PlayerInfoType;

export function PlayerInfo({
  dict,
  info,
  errors,
  onChange,
}: {
  dict: Dictionary;
  info: PlayerInfoType;
  errors: Partial<Record<Field, string>>;
  onChange: (field: Field, value: string) => void;
}) {
  const fields: {
    name: Field;
    label: string;
    placeholder: string;
    type: string;
    inputMode?: "text" | "tel" | "email";
    autoComplete: string;
  }[] = [
    { name: "name", label: dict.booking.nameLabel, placeholder: dict.booking.namePlaceholder, type: "text", autoComplete: "name" },
    { name: "phone", label: dict.booking.phoneLabel, placeholder: dict.booking.phonePlaceholder, type: "tel", inputMode: "tel", autoComplete: "tel" },
    { name: "email", label: dict.booking.emailLabel, placeholder: dict.booking.emailPlaceholder, type: "email", inputMode: "email", autoComplete: "email" },
  ];

  return (
    <div>
      <StepHeading title={dict.booking.infoTitle} subtitle={dict.booking.infoSubtitle} />
      <div className="mt-6 space-y-4">
        {fields.map((f) => {
          const error = errors[f.name];
          return (
            <div key={f.name}>
              <label htmlFor={f.name} className="mb-1.5 block text-sm font-semibold text-brand-black">
                {f.label}
              </label>
              <input
                id={f.name}
                type={f.type}
                inputMode={f.inputMode}
                autoComplete={f.autoComplete}
                dir={f.name === "email" || f.name === "phone" ? "ltr" : undefined}
                value={info[f.name]}
                onChange={(e) => onChange(f.name, e.target.value)}
                placeholder={f.placeholder}
                aria-invalid={!!error}
                className={cn(
                  "h-12 w-full rounded-xl border bg-white px-4 text-brand-black outline-none transition-colors placeholder:text-brand-black/35",
                  error
                    ? "border-red-400 focus:border-red-500"
                    : "border-black/[0.12] focus:border-brand-green",
                )}
              />
              {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
