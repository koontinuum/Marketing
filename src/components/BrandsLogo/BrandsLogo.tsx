import React from "react";
import css from "./BrandsLogo.module.css";
import spotify from "../../assets/brandsLogo/spotify.svg";
import slack from "../../assets/brandsLogo/slack.svg";
import netflix from "../../assets/brandsLogo/netflix.svg";
import heroku from "../../assets/brandsLogo/heroku.svg";
import vimeo from "../../assets/brandsLogo/vimeo.svg";
import airbnb from "../../assets/brandsLogo/airbnb.svg";
import marketingImg from "../../assets/brandsLogo/marketingImg.svg";

function BrandsLogo() {
  return (
    <div className={css.brands}>
      <div className={css.top}>
        <a href="#">
          <img src={spotify} alt="" />
        </a>
        <a href="#">
          <img src={slack} alt="" />
        </a>
        <a href="#">
          <img src={netflix} alt="" />
        </a>
        <a href="#">
          <img src={heroku} alt="" />
        </a>
        <a href="#">
          <img src={vimeo} alt="" />
        </a>
        <a href="#">
          <img src={airbnb} alt="" />
        </a>
      </div>
      <div className={css.bottom}>
        <img src={marketingImg} alt="" />
      </div>
    </div>
  );
}

export default BrandsLogo;
