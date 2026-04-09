import Link from "next/link";

import { MiraLogomark } from "@/components/brand/MiraLogomark";
import { PrimaryNav } from "@/components/layout/PrimaryNav";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/i18n/config";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function SiteHeader({ dict, locale }: Props) {
  const pathPrefix = `/${locale}`;
  const navLinks = [
    { href: `${pathPrefix}#problem`, label: dict.nav.problem },
    { href: `${pathPrefix}#solution`, label: dict.nav.system },
    { href: `${pathPrefix}#how`, label: dict.nav.how },
    { href: `${pathPrefix}#cta`, label: dict.nav.cta },
    { href: `${pathPrefix}/aignostics`, label: dict.nav.editorial },
  ];

  return (
    <header className="site">
      <div className="wrap site-inner">
        <Link href={pathPrefix} className="mark">
          <MiraLogomark className="mark-logomark" />
          {dict.nav.brand}
        </Link>
        <PrimaryNav
          links={navLinks}
          openMenuLabel={dict.a11y.openMenu}
          closeMenuLabel={dict.a11y.closeMenu}
          navLabel={dict.a11y.primaryNavigation}
        />
        <div className="site-tools">
          <LanguageSwitcher locale={locale} labels={dict.lang} />
        </div>
      </div>
    </header>
  );
}
