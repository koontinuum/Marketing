import React from "react";
import css from "./SeoAnalysis.module.css";
import messageIcon from "../../assets/seoAnalysisImg/messageIcon.svg";
import locationIcon from "../../assets/seoAnalysisImg/locationIcon.svg";

function seoAnalysis() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <h1>Get Free SEO Analysis</h1>
        <a href="">
          <img src={messageIcon} alt="" /> Hello@agency.com
        </a>
        <a href="">
          <img src={locationIcon} alt="" /> 508 Bridle Avenue Newnan, GA 30263
        </a>
      </div>
      <div className={css.right}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Website URL" />
        <button>Send Request</button>
      </div>
    </div>
  );
}

export default seoAnalysis;
