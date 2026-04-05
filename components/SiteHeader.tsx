"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { mainNavItems } from "@/lib/nav";

const linkClassName =
  "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";

function NavLinks({
  listClassName,
  onNavigate,
}: {
  listClassName?: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className={listClassName}>
      {mainNavItems.map((item) => (
        <li key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              className={linkClassName}
              rel="noopener noreferrer"
              target="_blank"
              onClick={onNavigate}
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className={linkClassName} onClick={onNavigate}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
        >
          gybyn
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks listClassName="flex flex-row items-center gap-1" />
        </nav>

        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M6 6l12 12M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className="border-t border-foreground/10 bg-background px-4 py-4 md:hidden"
        hidden={!open}
      >
        <nav aria-label="Primary">
          <NavLinks
            listClassName="flex flex-col gap-1"
            onNavigate={() => setOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
}
