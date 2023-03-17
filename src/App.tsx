import React from "react";
import "./App.css";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HomePage />
      </div>
      <Team />
      <Pricing />
      <Faqs />

      <Footer />
    </div>
  );
}

export default App;
