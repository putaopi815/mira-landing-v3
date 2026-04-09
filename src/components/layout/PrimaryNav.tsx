"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

export type PrimaryNavLink = {
  href: string;
  label: string;
};

type Props = {
  links: PrimaryNavLink[];
  openMenuLabel: string;
  closeMenuLabel: string;
  /** Landmark label for `<nav>` (localize per locale). */
  navLabel: string;
};

export function PrimaryNav({ links, openMenuLabel, closeMenuLabel, navLabel }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-drawer-open");
    } else {
      document.body.classList.remove("nav-drawer-open");
    }
    return () => document.body.classList.remove("nav-drawer-open");
  }, [open]);

  return (
    <div className="primary-nav-root">
      <button
        type="button"
        className={`nav-menu-toggle${open ? " nav-menu-toggle--open" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeMenuLabel : openMenuLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-bars" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id={panelId}
        className={`primary-nav${open ? " primary-nav--open" : ""}`}
        aria-label={navLabel}
      >
        <ul>
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
