"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

import type { Locale } from "@/i18n/config";

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getHashServerSnapshot() {
  return "";
}

type Props = {
  locale: Locale;
  labels: { switchLabel: string; en: string; zh: string };
};

export function LanguageSwitcher({ locale, labels }: Props) {
  const pathname = usePathname();
  const hash = useSyncExternalStore(
    subscribeHash,
    getHashSnapshot,
    getHashServerSnapshot,
  );

  const rest = pathname.replace(/^\/(en|zh)/, "") || "";
  const suffix = hash;
  const enHref = `/en${rest}${suffix}`;
  const zhHref = `/zh${rest}${suffix}`;

  return (
    <nav className="lang-switch" aria-label={labels.switchLabel}>
      <Link
        href={enHref}
        scroll={false}
        aria-current={locale === "en" ? "page" : undefined}
      >
        {labels.en}
      </Link>
      <span className="lang-sep" aria-hidden>
        /
      </span>
      <Link
        href={zhHref}
        scroll={false}
        aria-current={locale === "zh" ? "page" : undefined}
      >
        {labels.zh}
      </Link>
    </nav>
  );
}
