import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocumentLang } from "@/components/DocumentLang";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, locales } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <DocumentLang locale={locale} />
      {children}
    </>
  );
}
