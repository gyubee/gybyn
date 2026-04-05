import { Cormorant_Garamond } from "next/font/google";

const brand = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export function HeroLogo() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <h1
        className={`${brand.className} text-[clamp(3rem,11vw,6.5rem)] font-light leading-none tracking-[0.04em] text-foreground`}
      >
        gybyn
      </h1>
    </div>
  );
}
