import headerLogo from "../../assets/headerLogo/headerLogo.svg";
import ellipse from "../../assets/headerLogo/ellipse.svg";
import search from "../../assets/headerLogo/search.svg";
import searchWorld from "../../assets/headerLogo/searchWorld.svg";
import layer from "../../assets/headerLogo/layer.svg";
import css from "./HeaderSeo.module.css";
import { Link } from "react-router-dom";

function HeaderSeo() {
  return (
    <div className={css.mainBackground}>
      <div className="container">
        <div className={css.header}>
          <div className={css.linksleft}>
            <div>
              <a href="#">
                <img src={headerLogo} alt="" />
                <img src={ellipse} alt="" />
              </a>
            </div>
            <Link to="/">Home</Link>
            <a href="#">Components</a>
            <ul className={css.selectMenu}>
              <li>
                <a href="">Pages</a>
                <ul>
                  <li>
                    <Link to="/seopage">SeoPage</Link>
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
      <div className={css.mainText}>
        <h1>Offline SEO</h1>
        <p>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
          sapien, quis venenatis ante odio sit amet eros.
        </p>
        <div className={css.mainInputs}>
          <input className={css.borderHr} type="text" placeholder="Email" />
          <input type="text" placeholder="Website URL" />
          <button>Analyse</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSeo;
