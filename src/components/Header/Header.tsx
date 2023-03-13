import React from "react";
import headerLogo from "../../assets/headerLogo/headerLogo.svg";
import ellipse from "../../assets/headerLogo/ellipse.svg";
import search from "../../assets/headerLogo/search.svg";
import searchWorld from "../../assets/headerLogo/searchWorld.svg";
import layer from "../../assets/headerLogo/layer.svg";
import css from "./Header.module.css";

function Header() {
  return (
    <div className={css.header}>
      <div className={css.linksleft}>
        <div>
          <a href="#">
            <img src={headerLogo} alt="" />
            <img src={ellipse} alt="" />
          </a>
        </div>
        <a href="#">Home</a>
        <a href="#">Components</a>
        <a href="#" className={css.pages}>
          <img src={ellipse} alt="" />
          <p>Pages</p>
        </a>
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
        <a href="#">Login</a>
        <button>Join Us</button>
      </div>
    </div>
  );
}

export default Header;
