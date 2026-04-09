import Link from "next/link";

import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/i18n/config";

import { SiteHeader } from "./SiteHeader";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function Landing({ dict, locale }: Props) {
  const pathPrefix = `/${locale}`;

  return (
    <>
      <a className="skip" href="#main">
        {dict.a11y.skip}
      </a>

      <SiteHeader dict={dict} locale={locale} />

      <main id="main" aria-label={dict.a11y.main}>
        <section
          className="hero wrap"
          id="vision"
          aria-labelledby="hero-title"
        >
          <div>
            <p className="eyebrow reveal">{dict.hero.eyebrow}</p>
            <h1 id="hero-title" className="display reveal">
              {dict.hero.headline}
            </h1>
            <p className="hero-lead reveal">
              {dict.hero.lead.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <div className="actions reveal">
              <Link className="btn btn-primary" href={`${pathPrefix}#cta`}>
                {dict.hero.ctaPrimary}
              </Link>
              <Link className="btn btn-ghost" href={`${pathPrefix}#solution`}>
                {dict.hero.ctaGhost}
              </Link>
            </div>
          </div>
          <aside className="hero-aside reveal" aria-label={dict.a11y.heroAside}>
            <p>{dict.hero.aside}</p>
          </aside>
        </section>

        <section className="band" id="problem" aria-labelledby="problem-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.problem.eyebrow}</p>
            <h2
              id="problem-title"
              className="display reveal problem-heading"
            >
              {dict.problem.title}
            </h2>
            <p className="reveal problem-sub">{dict.problem.subtitle}</p>
            <div className="problem-grid">
              {dict.problem.items.map((item, i) => (
                <article key={item.title} className="problem-item reveal">
                  <div className="problem-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band paradigm" id="paradigm" aria-labelledby="paradigm-title">
          <div className="wrap paradigm-inner">
            <h2 id="paradigm-title" className="display reveal">
              {dict.paradigm.line1}
            </h2>
            <p className="tag reveal">{dict.paradigm.line2}</p>
            <p className="reveal paradigm-punch">{dict.paradigm.punchline}</p>
          </div>
        </section>

        <section className="band" id="solution" aria-labelledby="solution-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.solution.eyebrow}</p>
            <h2 id="solution-title" className="display reveal solution-heading">
              {dict.solution.title}
            </h2>
            <ol className="roles">
              {dict.solution.roles.map((role) => (
                <li key={role.name} className="reveal">
                  <span className="role-name">{role.name}</span>
                  <div>
                    <p className="role-title">{role.title}</p>
                    <p className="role-desc">{role.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.how.eyebrow}</p>
            <h2 id="how-title" className="display reveal how-heading">
              {dict.how.title}
            </h2>
            <div className="pipeline reveal">
              <ul className="pipeline-steps">
                {dict.how.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="pipeline-note">{dict.how.note}</p>
            </div>
            <div className="triad reveal" aria-hidden>
              {dict.how.pills.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="role" aria-labelledby="role-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.user.eyebrow}</p>
            <h2 id="role-title" className="display reveal user-heading">
              {dict.user.title}
            </h2>
            <ul className="bullet-list reveal">
              {dict.user.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band" id="depth" aria-labelledby="depth-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.depth.eyebrow}</p>
            <h2 id="depth-title" className="display reveal depth-heading">
              {dict.depth.title}
            </h2>
            <details className="system reveal">
              <summary>{dict.depth.summary}</summary>
              <ul>
                {dict.depth.layers.map((layer) => (
                  <li key={layer.bold}>
                    <strong>{layer.bold}</strong>
                    {layer.text}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className="band" id="why" aria-labelledby="why-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.diff.eyebrow}</p>
            <h2 id="why-title" className="display reveal diff-heading">
              {dict.diff.title}
            </h2>
            <div className="diff">
              {dict.diff.items.map((item) => (
                <article key={item.title} className="reveal">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band final-cta" id="cta" aria-labelledby="cta-title">
          <div className="wrap">
            <p className="eyebrow reveal">{dict.cta.eyebrow}</p>
            <h2 id="cta-title" className="display reveal cta-heading">
              {dict.cta.title}
            </h2>
            <div className="actions reveal">
              <a
                className="btn btn-primary"
                href="mailto:hello@example.com?subject=Early%20access%20request"
              >
                {dict.cta.primary}
              </a>
              <a
                className="btn btn-ghost"
                href="mailto:hello@example.com?subject=Product%20conversation"
              >
                {dict.cta.ghost}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>{dict.footer.line1}</span>
          <span>{dict.footer.line2}</span>
        </div>
      </footer>

      <RevealOnScroll />
    </>
  );
}
