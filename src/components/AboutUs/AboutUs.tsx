import React from "react";
import arrowBtn from "../../assets/aboutUsLogo/arrowbtn.svg";
import firstNum from "../../assets/aboutUsLogo/firstNum.svg";
import secondNum from "../../assets/aboutUsLogo/secondNum.svg";
import thirdNum from "../../assets/aboutUsLogo/thirdNum.svg";
import css from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <b>About Us</b>
        <h1>Who We Are</h1>
        <p>
          In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. In dui magna, posuere eget,
          vestibulum et, tempor auctor, justo. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <button>
          Lean more <img src={arrowBtn} alt="" />
        </button>
      </div>
      <div className={css.right}>
        <div className={css.firstWrapper}>
          <div>
            <img src={firstNum} alt="" />
            <p>PROJECTS</p>
          </div>
          <b>
            Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
          </b>
        </div>
        <div className={css.firstWrapper}>
          <div>
            <img src={secondNum} alt="" />
            <p>Happy CLIENTS</p>
          </div>
          <b>
            Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
          </b>
        </div>
        <div className={css.firstWrapper}>
          <div>
            <img src={thirdNum} alt="" />
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <b>
            Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
          </b>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
