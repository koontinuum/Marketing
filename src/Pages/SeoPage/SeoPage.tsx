import React from "react";
import BenefitsAchieved from "../../components/BenefitsAchieved/BenefitsAchieved";
import HeaderSeo from "../../components/HeaderSeo/HeaderSeo";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import OfflineSeo from "../../components/OfflineSeo/OfflineSeo";
import ServicesInclude from "../../components/ServicesInclude/ServicesInclude";

function SeoPage() {
  return (
    <>
      <HeaderSeo />
      <OfflineSeo />
      <ServicesInclude />
      <BenefitsAchieved />
      <HowItWorks />
    </>
  );
}

export default SeoPage;
