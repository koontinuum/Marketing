import React from "react";
import "./App.css";
import { LatestPosts } from "./components/LatestPosts/LatestPosts";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import { Testimonials } from "./components/Testimonials/Testimonials";
import SeoAnalysis from "./components/SeoAnalysis/SeoAnalysis";
import HomePage from "./Pages/HomePage/HomePage";
import UpFooter from "./components/UpFooter/UpFooter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HomePage />
      </div>
      <Team />
      <Pricing />
      <Testimonials />
      <LatestPosts />
      <SeoAnalysis />
      <UpFooter />
    </div>
  );
}

export default App;
