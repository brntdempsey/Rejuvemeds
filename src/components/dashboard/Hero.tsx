import HeroTitle from "@/components/dashboard/HeroTitle";
import HeroCards from "@/components/dashboard/HeroCards";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ paddingTop: 101, paddingLeft: 245, paddingRight: 245 }}>
      <HeroTitle />
      <HeroCards />
    </section>
  );
}
