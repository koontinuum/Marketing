import headerLogo from "../../assets/headerLogo/headerLogo.svg";
import ellipse from "../../assets/headerLogo/ellipse.svg";
import search from "../../assets/headerLogo/search.svg";
import searchWorld from "../../assets/headerLogo/searchWorld.svg";
import layer from "../../assets/headerLogo/layer.svg";
import burger from "../../assets/headerLogo/burger.svg";
import css from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className={css.header}>
        <div>
          <a href="#">
            <img src={headerLogo} alt="" />
            <img src={ellipse} alt="" />
          </a>
        </div>
        <div className={css.miniHeader}>
          <img src={burger} alt="" />
          <img src={search} alt="" />
        </div>
        <div className={css.linksleft}>
          <Link to="/">Home</Link>
          <a href="#">Components</a>
          <ul className={css.menu}>
            <li>
              <a href="">Pages</a>
              <ul>
                <li>
                  <Link to="/seopage">SeoPage</Link>
                  <Link to="/casepage">CasePage</Link>
                  <Link to="/studiespage">CaseStudiesPage</Link>
                  <Link to="/blogpage">BlogPage</Link>
                  <Link to="/visionpage">VisionPage</Link>
                  <Link to="/sliderspage">SlidersPage</Link>
                  <Link to="/visionpage">VisionPage</Link>
                  <Link to="/contactpage">ContactPage</Link>
                </li>
              </ul>
            </li>
          </ul>
          <a href="#">Documentation</a>
        </div>
        <div className={css.linksright}>
          <a href="#">
            <img src={search} alt="" />
          </a>
          <a href="#">
            <img src={searchWorld} alt="" />
          </a>
          <p>
            <img src={layer} alt="" />
          </p>
          <button className={css.loginbtn}>Login</button>
          <button className={css.joinupbtn}>Join Us</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
