export type CourtType = "indoor" | "outdoor";

export interface Court {
  id: string;
  name: { en: string; ar: string };
  type: CourtType;
  /** Price in SAR for the default 90-minute session */
  pricePer90: number;
  image: string;
  features: { en: string[]; ar: string[] };
}

export interface TimeSlot {
  /** 24h start time, e.g. "18:00" */
  start: string;
  /** minutes */
  durationMin: number;
  available: boolean;
}

export interface PlayerInfo {
  name: string;
  phone: string;
  email: string;
}

export interface BookingState {
  courtId?: string;
  /** ISO yyyy-mm-dd */
  date?: string;
  /** HH:mm 24h start time */
  time?: string;
  info: PlayerInfo;
}
