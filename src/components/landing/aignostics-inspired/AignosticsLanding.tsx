import Link from "next/link";

import { MiraLogomark } from "@/components/brand/MiraLogomark";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/i18n/config";

import "./aignostics-inspired.css";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const PILLAR_HOME_HASH: Record<string, string> = {
  paradigm: "paradigm",
  architecture: "depth",
  role: "role",
  pipeline: "how",
};

export function AignosticsLanding({ dict, locale }: Props) {
  const pathPrefix = `/${locale}`;
  const v = dict.variantAignostics;

  return (
    <>
      <a className="skip" href="#agn-main">
        {dict.a11y.skip}
      </a>

      <div className="agn">
        <header className="agn-top">
          <div className="wrap agn-top-inner">
            <Link href={pathPrefix} className="agn-mark">
              <MiraLogomark className="mark-logomark" />
              {dict.nav.brand}
            </Link>
            <nav aria-label="Primary">
              <ul>
                <li>
                  <a href={`${pathPrefix}/aignostics#capabilities`}>{v.productsEyebrow}</a>
                </li>
                <li>
                  <a href={`${pathPrefix}/aignostics#agn-paradigm`}>{v.pillars[0].more}</a>
                </li>
                <li>
                  <a href={`${pathPrefix}/aignostics#stories`}>{v.storiesEyebrow}</a>
                </li>
                <li>
                  <a href={`${pathPrefix}/aignostics#agn-cta`}>{dict.nav.cta}</a>
                </li>
              </ul>
            </nav>
            <div className="site-tools">
              <Link className="agn-back" href={pathPrefix}>
                {v.backClassic}
              </Link>
              <LanguageSwitcher locale={locale} labels={dict.lang} />
            </div>
          </div>
        </header>

        <main id="agn-main" aria-label={dict.a11y.main}>
          <section className="agn-hero wrap" aria-labelledby="agn-hero-title">
            <div className="agn-hero-grid">
              <div>
                <p className="agn-kicker reveal">{v.kicker}</p>
                <h1 id="agn-hero-title" className="reveal">
                  {v.heroTitle}
                </h1>
                <p className="agn-hero-lead reveal">{v.heroLead}</p>
                <div className="agn-actions reveal">
                  <a className="btn btn-primary" href="mailto:hello@example.com?subject=Early%20access">
                    {v.heroCtaPrimary}
                  </a>
                  <a className="btn btn-ghost" href={`${pathPrefix}/aignostics#capabilities`}>
                    {v.heroCtaSecondary}
                  </a>
                </div>
              </div>
              <aside className="agn-hero-aside reveal" aria-label={dict.a11y.heroAside}>
                <p>{dict.hero.aside}</p>
              </aside>
            </div>
          </section>

          <section className="agn-band wrap" id="capabilities" aria-labelledby="agn-cap-title">
            <p className="agn-eyebrow reveal">{v.productsEyebrow}</p>
            <h2 id="agn-cap-title" className="agn-section-title reveal">
              {dict.solution.title}
            </h2>
            <p className="agn-intro reveal">{v.productsIntro}</p>
            <div className="agn-products">
              {v.products.map((card) => (
                <article key={card.title} className="agn-card reveal">
                  <span className="agn-card-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <a className="agn-textlink" href={`${pathPrefix}#how`}>
                    {card.more}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="wrap" aria-label={v.pillars[0].title}>
            {v.pillars.map((pillar, i) => {
              const id = `agn-${pillar.hash}`;
              return (
                <div
                  key={pillar.hash}
                  id={id}
                  className={`agn-row ${i % 2 === 1 ? "agn-row--flip" : ""}`}
                >
                  <div className="agn-row-visual reveal" aria-hidden />
                  <div className="agn-row-copy">
                    <h2 className="reveal">{pillar.title}</h2>
                    <p className="reveal">{pillar.body}</p>
                    <a
                      className="agn-textlink reveal"
                      href={`${pathPrefix}#${PILLAR_HOME_HASH[pillar.hash] ?? pillar.hash}`}
                    >
                      {pillar.more}
                    </a>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="agn-band wrap" aria-labelledby="agn-trust-label">
            <div className="agn-trust">
              <p id="agn-trust-label" className="agn-trust-label reveal">
                {v.trustLabel}
              </p>
              <ul className="reveal">
                {v.trustItems.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="agn-band wrap" id="stories" aria-labelledby="agn-stories-title">
            <p className="agn-eyebrow reveal">{v.storiesEyebrow}</p>
            <h2 id="agn-stories-title" className="agn-section-title reveal">
              {v.storiesTitle}
            </h2>
            <div className="agn-stories-grid">
              {v.stories.map((s) => (
                <article key={s.title} className="agn-story reveal">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <a className="agn-textlink" href={`${pathPrefix}/aignostics#agn-cta`}>
                    {s.more}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="agn-band agn-closing" id="agn-cta" aria-labelledby="agn-closing-title">
            <div className="wrap">
              <p className="agn-eyebrow reveal">{v.closingEyebrow}</p>
              <h2 id="agn-closing-title" className="reveal">
                {v.closingTitle}
              </h2>
              <div className="agn-actions reveal">
                <a className="btn btn-primary" href="mailto:hello@example.com?subject=Early%20access">
                  {v.closingPrimary}
                </a>
                <a className="btn btn-ghost" href="mailto:hello@example.com?subject=Product%20conversation">
                  {v.closingGhost}
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="agn-footer">
          <div className="wrap">
            <span>{dict.footer.line1}</span>
            <span>{v.footerNote}</span>
          </div>
        </footer>
      </div>

      <RevealOnScroll />
    </>
  );
}
