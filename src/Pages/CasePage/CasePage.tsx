import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import OurCaseStudies, {
  AppendDots,
} from "../../components/OurCaseStudies/OurCaseStudies";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import UpFooter from "../../components/UpFooter/UpFooter";

function CasePage() {
  return (
    <>
      <Header />
      <AppendDots />
      <Testimonials />
      <LatestPosts />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default CasePage;
