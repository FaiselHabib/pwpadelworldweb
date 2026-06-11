import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PW Padel World — The Best Place for Padel in Jeddah",
  description:
    "Premium padel courts in Jeddah. Book a court in seconds — instant confirmation, world-class facilities, Saudi Padel A-rated club.",
};

// The <html> element is rendered in app/[locale]/layout.tsx so that lang/dir
// can be set per locale (RTL for Arabic).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
