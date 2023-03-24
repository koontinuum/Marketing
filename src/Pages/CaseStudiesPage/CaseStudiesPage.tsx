import React from "react";
import CaseStudiesContent from "../../components/CaseStudiesContent/CaseStudiesContent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import UpFooter from "../../components/UpFooter/UpFooter";

function CaseStudiesPage() {
  return (
    <>
      <Header />
      <CaseStudiesContent />
      <Testimonials />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default CaseStudiesPage;
