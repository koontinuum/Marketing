import BenefitsAchieved from "../../components/BenefitsAchieved/BenefitsAchieved";
import Footer from "../../components/Footer/Footer";
import HeaderSeo from "../../components/HeaderSeo/HeaderSeo";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import OfflineSeo from "../../components/OfflineSeo/OfflineSeo";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import ServicesInclude from "../../components/ServicesInclude/ServicesInclude";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import UpFooter from "../../components/UpFooter/UpFooter";

function SeoPage() {
  return (
    <>
      <HeaderSeo />
      <OfflineSeo />
      <ServicesInclude />
      <BenefitsAchieved />
      <HowItWorks />
      <Testimonials />
      <LatestPosts />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default SeoPage;
