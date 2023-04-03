import React from "react";
import OurStory from "../../assets/OurStory/OurStory";
import Header from "../../components/Header/Header";
import Our from "../../components/Our/Our";
import WhoWe from "../../components/WhoWe/WhoWe";
import BrandsClients from "../../components/BrandsClientsLogo/BrandsClients";
import Faqs from "../../components/Faqs/Faqs";
import Footer from "../../components/Footer/Footer";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import MarketingTeam from "../../components/PlaceMarketingTeam/MarketingTeam";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import Testimonials from "../../components/Testimonials/Testimonials";
import UpFooter from "../../components/UpFooter/UpFooter";

function VisionPage() {
  return (
    <>
      <Header />
      <WhoWe/>
      <Our/>
      <OurStory/>
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
