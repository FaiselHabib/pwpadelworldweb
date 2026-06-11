import { notFound } from "next/navigation";
import { Inter, Tajawal } from "next/font/google";
import { isLocale, localeDirection, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const latin = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const arabic = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const dir = localeDirection[locale];

  return (
    <html lang={locale} dir={dir} className={`${latin.variable} ${arabic.variable}`}>
      <body className={locale === "ar" ? "font-arabic" : "font-sans"}>
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
