import React from "react";
import BigSlider from "../../components/BigSlider/BigSlider";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import SlidersList from "../../components/SlidersList/SlidersList";

function SlidersPage() {
  return (
    <>
      <Header />
      <BigSlider />
      <SlidersList/>
    </>
  );
}

export default SlidersPage;
