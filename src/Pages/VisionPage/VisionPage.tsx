import BrandsClients from "../../components/BrandsClientsLogo/BrandsClients";
import Faqs from "../../components/Faqs/Faqs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import MarketingTeam from "../../components/PlaceMarketingTeam/MarketingTeam";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import Testimonials from "../../components/Testimonials/Testimonials";
import UpFooter from "../../components/UpFooter/UpFooter";

function VisionPage() {
  return (
    <>
      <Header />
      <MarketingTeam />
      <Testimonials />
      <BrandsClients />
      <LatestPosts />
      <Faqs />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default VisionPage;
