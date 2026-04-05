import { HeroLogo } from "@/components/HeroLogo";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex min-h-[100dvh] flex-col pt-14"
        tabIndex={-1}
      >
        <HeroLogo />
      </main>
    </>
  );
}
