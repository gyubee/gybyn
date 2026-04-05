import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "gybyn",
    template: "%s · gybyn",
  },
  description: "gybyn — brand hub and links to projects and subsites.",
  metadataBase: new URL("https://www.gybyn.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="absolute left-[-9999px] top-0 z-[100] rounded-md border border-foreground/15 bg-background px-4 py-2 text-sm text-foreground shadow-sm outline-none ring-foreground/30 focus:left-4 focus:top-4 focus:ring-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
