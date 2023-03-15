import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import BrandsLogo from "../../components/BrandsLogo/BrandsLogo";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import OurWorkMenu from "../../components/OurWorkMenu/OurWorkMenu";
import ServicesMenu from "../../components/ServicesMenu/ServicesMenu";
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
    </>
  );
}

export default HomePage;
