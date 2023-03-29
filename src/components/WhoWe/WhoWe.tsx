import React from "react";
import css from "./WhoWe.module.css";
import whowe from "../../assets/WhoWe/whowe.svg";
import years from "../../assets/WhoWe/years.svg";
import awards from "../../assets/WhoWe/awards.svg";
import projects from "../../assets/WhoWe/projects.svg";
import happy from "../../assets/WhoWe/happy.svg";

function WhoWe() {
  return (
    <div className="container">
      <div className={css.whoWe}>
        <div className={css.whoWeLeft}>
          <div className={css.whoWeLeftImg}>
            <img src={whowe} alt="" />
          </div>
        </div>
        <div className={css.whoWeRight}>
          <h2>Who We Are?</h2>
          <p>
            Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc
            fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis,
            molestie non, velit.
          </p>
          <p>
            Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere
            iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
            Praesent venenatis metus at tortor pulvinar varius.
          </p>
          <button>Check Our Work &#10230;</button>
        </div>
       
      </div>
      <div className={css.whoWeBottom}>
            <div className={css.contentBottom}>
                <img src={years} alt="" />
                <h2>12</h2>
                <p>Years of experience</p>
            </div>
            <div className={css.contentBottom}>
                <img src={awards} alt="" />
                <h2>20</h2>
                <p>Awards</p>
            </div>
            <div className={css.contentBottom}>
                <img src={projects} alt="" />
                <h2>150</h2>
                <p>Projects</p>
            </div>
            <div className={css.contentBottom}>
                <img src={happy} alt="" />
                <h2>32k</h2>
                <p>Happy clients</p>
            </div>
        </div>
    </div>
  );
}

export default WhoWe;
