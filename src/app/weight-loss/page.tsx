import BannerSection from "@/components/weightloss/BannerSection";
import GettingStarted from "@/components/weightloss/GettingStarted";
import Brands from "@/components/weightloss/Brands";
import HighFive from "@/components/weightloss/HighFive";
import OurMembers from "@/components/weightloss/OurMembers";
import ExpertCare from "@/components/weightloss/ExpertCare";
import WhyPeopleChooseUs from "@/components/weightloss/WhyPeopleChooseUs";
import FAQ from "@/components/weightloss/FAQ";
import Products from "@/components/weightloss/Products";
import OurMembersLoveUs from "@/components/weightloss/OurMembersLoveUs";
import Footer from "@/components/weightloss/Footer";

export default function WeightLoss() {
  return (
    <main>
      <BannerSection />
      <Products />
      <GettingStarted />
      <Brands />
      <HighFive />
      <OurMembers />
      <ExpertCare />
      <WhyPeopleChooseUs />
      <FAQ />
      <OurMembersLoveUs />
      <Footer />
    </main>
  );
}
