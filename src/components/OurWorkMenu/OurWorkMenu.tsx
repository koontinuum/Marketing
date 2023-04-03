import React from "react";
import leftImg from "../../assets/workMenuLogo/leftImg.svg";
import centerImg from "../../assets/workMenuLogo/centerImg.svg";
import centerRightImg from "../../assets/workMenuLogo/centerRightImg.svg";
import rightImg from "../../assets/workMenuLogo/rightImg.svg";
import centerBottomImg from "../../assets/workMenuLogo/centerBottomImg.svg";
import centerLeftImg from "../../assets/workMenuLogo/centerLeftImg.svg";
import css from "./OurWorkMenu.module.css";

function OurWorkMenu() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <p>Our Work</p>
        <h1>Case Studies</h1>
        <div className={css.main}>
          <div className={css.left}>
            <img src={leftImg} alt="" />
            <div className={css.text}>
              <p>marketing</p>
              <h1>General Electric</h1>
            </div>
          </div>
          <div className={css.center}>
            <div className={css.up}>
              <img src={centerImg} alt="" />
              <div className={css.info}>
                <b>branding</b>
                <h1>Bank of America</h1>
                <p>
                  Quisque id odio. Nunc egestas, augue at pellentesque laoreet,
                  felis eros vehicul
                </p>
                <button>Learn more →</button>
              </div>
              <div className={css.centerRight}>
                <img src={centerRightImg} alt="" />
                <div className={css.text2}>
                  <p>SEO</p>
                  <h1>Louis Vuitton</h1>
                </div>
              </div>
            </div>
            <div className={css.bottomCenter}>
              <div className={css.centerLeft}>
                <img src={centerLeftImg} alt="" />
                <div className={css.text3}>
                  <p>MARKETING</p>
                  <h1>Gillette</h1>
                </div>
              </div>
              <div className={css.bottom}>
                <img src={centerBottomImg} alt="" />
                <div className={css.infotext4}>
                  <b>SOCIAL</b>
                  <h1>Louis Vuitton</h1>
                  <p>
                    Quisque id odio. Nunc egestas, augue at pellentesque
                    laoreet, felis eros vehicul
                  </p>
                  <button>Learn more →</button>
                </div>
              </div>
            </div>
          </div>
          <div className={css.right}>
            <img src={rightImg} alt="" />
            <div className={css.text4}>
              <p>web</p>
              <h1>Gillette</h1>
            </div>
          </div>
        </div>
        <button className={css.viewbtn}>View All →</button>
      </div>
      <div className={css.phoneWrapper}>
        <p>Our Work</p>
        <h1>Case Studies</h1>
        <div className={css.items}>
          <div className={css.item1}>
            <p>marketing</p>
            <h1>General Electric</h1>
          </div>
          <div className={css.item2}>
            <p>marketing</p>
            <h1>General Electric</h1>
          </div>
          <div className={css.item3}>
            <p>marketing</p>
            <h1>General Electric</h1>
          </div>
          <div className={css.item4}>
            <p>marketing</p>
            <h1>General Electric</h1>
          </div>
          <div className={css.item5}>
            <p>marketing</p>
            <h1>General Electric</h1>
          </div>
          <div className={css.item6}>
            <p>marketing</p>
            <h1>General Electric</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWorkMenu;
