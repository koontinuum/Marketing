import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeoPage from "./Pages/SeoPage/SeoPage";
import CasePage from "./Pages/CasePage/CasePage";
import CaseStudiesPage from "./Pages/CaseStudiesPage/CaseStudiesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seopage" element={<SeoPage />} />
        <Route path="/casepage" element={<CasePage />} />
        <Route path="/casestudiespage" element={<CaseStudiesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
