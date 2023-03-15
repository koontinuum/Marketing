import React from "react";
import "./App.css";
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
      <div className="container">
        <Pricing/>
      </div>
    </div>
  );
}

export default App;
