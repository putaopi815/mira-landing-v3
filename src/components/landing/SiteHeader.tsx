import Link from "next/link";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/i18n/config";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function SiteHeader({ dict, locale }: Props) {
  const pathPrefix = `/${locale}`;

  return (
    <header className="site">
      <div className="wrap site-inner">
        <Link href={pathPrefix} className="mark">
          {dict.nav.brand}
        </Link>
        <nav aria-label="Primary">
          <ul>
            <li>
              <Link href={`${pathPrefix}#problem`}>{dict.nav.problem}</Link>
            </li>
            <li>
              <Link href={`${pathPrefix}#solution`}>{dict.nav.system}</Link>
            </li>
            <li>
              <Link href={`${pathPrefix}#how`}>{dict.nav.how}</Link>
            </li>
            <li>
              <Link href={`${pathPrefix}#cta`}>{dict.nav.cta}</Link>
            </li>
          </ul>
        </nav>
        <div className="site-tools">
          <LanguageSwitcher locale={locale} labels={dict.lang} />
        </div>
      </div>
    </header>
  );
}
