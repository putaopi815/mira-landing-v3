import { notFound } from "next/navigation";

import { Landing } from "@/components/landing/Landing";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return <Landing dict={dict} locale={locale} />;
}
