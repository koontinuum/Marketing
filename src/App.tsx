import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeoPage from "./Pages/SeoPage/SeoPage";
import CasePage from "./Pages/CasePage/CasePage";
import BlogDetailsPage from "./Pages/BlogDetailsPage/BlogDetailsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seopage" element={<SeoPage />} />
        <Route path="/casepage" element={<CasePage />} />
        <Route path="/blogpage" element={<BlogDetailsPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
