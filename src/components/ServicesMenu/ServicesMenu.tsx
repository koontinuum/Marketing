import React from "react";
import seoImg from "../../assets/ourServices/seoImg.svg";
import emailImg from "../../assets/ourServices/emailImg.svg";
import searchImg from "../../assets/ourServices/searchImg.svg";
import socialImg from "../../assets/ourServices/socialImg.svg";
import arrowBtn from "../../assets/ourServices/arrowbtn.svg";
import css from "./Services.module.css";

function ServicesMenu() {
  return (
    <div className={css.wrapper}>
      <div className={css.up}>
        <b>Our Services</b>
        <h1>We Provide</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>
      <div className={css.bottom}>
        <div className={css.seo}>
          <img src={seoImg} alt="" />
          <h1>SEO</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
          <img className={css.arrowBtn} src={arrowBtn} alt="" />
        </div>
        <div className={css.email}>
          <img src={emailImg} alt="" />
          <h1>Email Marketing</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
          <img className={css.arrowBtn} src={arrowBtn} alt="" />
        </div>
        <div className={css.search}>
          <img src={searchImg} alt="" />
          <h1>Search Engine Oprimization</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
          <img className={css.arrowBtn} src={arrowBtn} alt="" />
        </div>
        <div className={css.social}>
          <img src={socialImg} alt="" />
          <h1> Social Marketing</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
          <img className={css.arrowBtn} src={arrowBtn} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesMenu;
