import type { TimeSlot } from "@/types/booking";
import { PRICING } from "./courts";

/** Daily session start times on a 90-minute grid (mock). */
export const SLOT_TIMES = [
  "08:00",
  "09:30",
  "11:00",
  "12:30",
  "14:00",
  "15:30",
  "17:00",
  "18:30",
  "20:00",
  "21:30",
];

/** Stable string hash so mock availability is consistent per court+date+slot. */
function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Mock availability for a given court and ISO date. Deterministic so a slot
 * shows the same state on every render. ~30% of slots are "booked".
 */
export function getSlots(courtId: string, dateISO: string): TimeSlot[] {
  return SLOT_TIMES.map((start) => {
    const available = hash(`${courtId}|${dateISO}|${start}`) % 10 >= 3;
    return { start, durationMin: PRICING.defaultDurationMin, available };
  });
}
