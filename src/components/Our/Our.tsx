import React from "react";
import css from "./Our.module.css";
import ourBack from "../../assets/Our/ourBack.svg";
import play from "../../assets/Our/play.svg";
import customer from "../../assets/Our/customer.svg";
import transparency from "../../assets/Our/transparency.svg";
import reputation from "../../assets/Our/reputation.svg";
import cooperation from "../../assets/Our/cooperation.svg";

function Our() {
  return (
    <div className="container">
      <div className={css.our}>
        <div className={css.ourContent}>
          <h2>Our Vision</h2>
          <img src={play} alt="" />
          <p>
            Our vision offering the best product nulla vehicula <br /> tortor
            scelerisque ultrices malesuada.
          </p>
        </div>
      </div>
      <div className={css.ourCore}>
        <h2>Our Core Values</h2>
        <div className={css.coreScroll}>
          <div className={css.scrollAll}>
            <img src={customer} alt="" />
            <h4>Customer Satisfaction</h4>
            <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
          </div>
          <div className={css.scrollAll}>
            <img src={transparency} alt="" />
            <h4>Transparency</h4>
            <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
          </div>
          <div className={css.scrollAll}>
            <img src={reputation} alt="" />
            <h4>Reputation</h4>
            <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
          </div>
          <div className={css.scrollAll}>
            <img src={cooperation} alt="" />
            <h4>Cooperation</h4>
            <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Our;
