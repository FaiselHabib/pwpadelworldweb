import type { Court } from "@/types/booking";

/**
 * Mock courts. Prices are placeholders for Phase 1 and are easy to change here.
 * Outdoor: 200 SAR / 90 min · Indoor: 280 SAR / 90 min
 */
export const PRICING = {
  outdoorPer90: 200,
  indoorPer90: 280,
  defaultDurationMin: 90,
} as const;

export const courts: Court[] = [
  {
    id: "indoor-1",
    name: { en: "Indoor Court — Climate Controlled", ar: "ملعب داخلي — مكيّف" },
    type: "indoor",
    pricePer90: PRICING.indoorPer90,
    image: "/images/court-night.jpg",
    features: {
      en: ["Air-conditioned", "Premium lighting", "Play year-round"],
      ar: ["مكيّف بالكامل", "إضاءة احترافية", "متاح طوال العام"],
    },
  },
  {
    id: "outdoor-1",
    name: { en: "Outdoor Court 1", ar: "ملعب خارجي ١" },
    type: "outdoor",
    pricePer90: PRICING.outdoorPer90,
    image: "/images/court-4.jpg",
    features: {
      en: ["Open air", "Pro surface", "Floodlit evenings"],
      ar: ["هواء طلق", "أرضية احترافية", "إضاءة ليلية"],
    },
  },
  {
    id: "outdoor-2",
    name: { en: "Outdoor Court 2", ar: "ملعب خارجي ٢" },
    type: "outdoor",
    pricePer90: PRICING.outdoorPer90,
    image: "/images/court-4.jpg",
    features: {
      en: ["Open air", "Pro surface", "Floodlit evenings"],
      ar: ["هواء طلق", "أرضية احترافية", "إضاءة ليلية"],
    },
  },
  {
    id: "outdoor-3",
    name: { en: "Outdoor Court 3", ar: "ملعب خارجي ٣" },
    type: "outdoor",
    pricePer90: PRICING.outdoorPer90,
    image: "/images/court-4.jpg",
    features: {
      en: ["Open air", "Pro surface", "Floodlit evenings"],
      ar: ["هواء طلق", "أرضية احترافية", "إضاءة ليلية"],
    },
  },
  {
    id: "outdoor-4",
    name: { en: "Outdoor Court 4", ar: "ملعب خارجي ٤" },
    type: "outdoor",
    pricePer90: PRICING.outdoorPer90,
    image: "/images/court-4.jpg",
    features: {
      en: ["Open air", "Pro surface", "Floodlit evenings"],
      ar: ["هواء طلق", "أرضية احترافية", "إضاءة ليلية"],
    },
  },
];
