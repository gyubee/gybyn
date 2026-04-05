/**
 * Central list of primary navigation links. Add entries here (e.g. Blog, About)
 * instead of scattering hrefs across components.
 */
export type NavItem = {
  label: string;
  href: string;
  /** Use for absolute URLs; internal routes use Next.js `Link`. */
  external?: boolean;
};

export const mainNavItems: readonly NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Blog", href: "/blog" },
  // { label: "About", href: "/about" },
] as const;
