import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeoPage from "./Pages/SeoPage/SeoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seopage" element={<SeoPage />} />
      </Routes>
    </div>
  );
}

export default App;
