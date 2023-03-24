import AboutUs from "../../components/AboutUs/AboutUs";
import BrandsLogo from "../../components/BrandsLogo/BrandsLogo";
import Faqs from "../../components/Faqs/Faqs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import Main from "../../components/Main/Main";
import OurWorkMenu from "../../components/OurWorkMenu/OurWorkMenu";
import Pricing from "../../components/Pricing/Pricing";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import ServicesMenu from "../../components/ServicesMenu/ServicesMenu";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";
import UpFooter from "../../components/UpFooter/UpFooter";
import WorkFlow from "../../components/WorkFlow/WorkFlow";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <BrandsLogo />
      <AboutUs />
      <ServicesMenu />
      <WorkFlow />
      <OurWorkMenu />
      <Team />
      <Pricing />
      <Faqs />
      <Testimonials />
      <LatestPosts />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default HomePage;
