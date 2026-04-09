import "server-only";

import type en from "@/dictionaries/en.json";
import { isLocale, type Locale } from "@/i18n/config";

export type Dictionary = typeof en;

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  zh: () => import("@/dictionaries/zh.json").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (!isLocale(locale)) {
    throw new Error(`Unknown locale: ${locale}`);
  }
  return loaders[locale]();
}
