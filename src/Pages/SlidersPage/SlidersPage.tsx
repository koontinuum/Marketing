import React from "react";
import BigSlider from "../../components/BigSlider/BigSlider";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SlidersList from "../../components/SlidersList/SlidersList";

import UpFooter from "../../components/UpFooter/UpFooter";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";

import Footer from "../../components/Footer/Footer";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import UpFooter from "../../components/UpFooter/UpFooter";


function SlidersPage() {
  return (
    <>
      <Header />
      <BigSlider />
      <SlidersList />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default SlidersPage;
