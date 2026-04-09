import { notFound } from "next/navigation";

import { AignosticsLanding } from "@/components/landing/aignostics-inspired/AignosticsLanding";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EditorialPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return <AignosticsLanding dict={dict} locale={locale} />;
}
