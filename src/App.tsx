import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeoPage from "./Pages/SeoPage/SeoPage";
import CasePage from "./Pages/CasePage/CasePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seopage" element={<SeoPage />} />
        <Route path="/casepage" element={<CasePage />} />
      </Routes>
    </div>
  );
}

export default App;
