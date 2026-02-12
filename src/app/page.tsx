import Hero from "@/components/dashboard/Hero";
import Banner from "@/components/dashboard/Banner";
import BannerSection from "@/components/dashboard/BannerSection";
import GettingStarted from "@/components/dashboard/GettingStarted";
import Brands from "@/components/dashboard/Brands";
import HighFive from "@/components/dashboard/HighFive";
import OurMembers from "@/components/dashboard/OurMembers";
import ExpertCare from "@/components/dashboard/ExpertCare";
import WhyPeopleChooseUs from "@/components/dashboard/WhyPeopleChooseUs";
import FAQ from "@/components/dashboard/FAQ";
import Products from "@/components/dashboard/Products";
import OurMembersLoveUs from "@/components/dashboard/OurMembersLoveUs";
import Footer from "@/components/dashboard/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <BannerSection />
      <GettingStarted />
      <Brands />
      <HighFive />
      <OurMembers />
      <ExpertCare />
      <WhyPeopleChooseUs />
      <FAQ />
      <Products />
      <OurMembersLoveUs />
      <Footer />
    </main>
  );
}
