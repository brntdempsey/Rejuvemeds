import HeroTitle from "@/components/dashboard/HeroTitle";
import HeroCards from "@/components/dashboard/HeroCards";

export default function Hero() {
  return (
    <section className="hero-section relative w-full" style={{ paddingTop: "clamp(40px, 5.3vw, 101px)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <HeroTitle />
      <HeroCards />
    </section>
  );
}
