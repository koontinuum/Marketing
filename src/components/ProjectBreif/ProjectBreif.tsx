import React from "react";
import css from "./ProjectBreif.module.css";
import pBreifVector from "../../assets/CaseStudiesContent/pBreifVector.svg";
import stFbook from "../../assets/CaseStudiesContent/stFbook.svg";
import stIn from "../../assets/CaseStudiesContent/stIn.svg";
import stInsta from "../../assets/CaseStudiesContent/stInsta.svg";
import stTwitter from "../../assets/CaseStudiesContent/stTwitter.svg";


function ProjectBreif() {
  return (
    <div className={css.pBreif}>
      <div className={css.pBreifUp}>
        <p>Home</p>
        <img src={pBreifVector} alt="" />
        <p>Case Studies</p>
        <img src={pBreifVector} alt="" />
        <p>Bank of America</p>
      </div>
      <div className={css.pBreifAll}>
        <div className={css.pBreifLeft}>
          <h4>Project Brief</h4>
          <p>
            Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
            libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit
            amet nibh. Phasellus viverra nulla ut metus varius laoreet.
          </p>
          <h4>How We Work</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul>
            <li>Medical Assistant</li>
            <li>Web Designer</li>
            <li>Dog Trainer</li>
            <li>Nursing Assistant</li>
            <li>President of Sales</li>
          </ul>
          <h4>Results</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul>
            <li>Medical Assistant</li>
            <li>Web Designer</li>
            <li>Dog Trainer</li>
            <li>Nursing Assistant</li>
            <li>President of Sales</li>
          </ul>
          <div className={css.gallery}>
            <h4>Gallery</h4>
          </div>
        </div>
        <div className={css.pBreifRight}>
          <div className={css.pBreifRightContent}>
            <div className={css.summary}>
              <h6>summary</h6>
              <h4>Bank of America</h4>
              <p>
                Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit
                amet augue.
              </p>
            </div>
            <div className={css.website}>
                <h6>Website</h6>
                <p>example.com</p>
                <h6>Category</h6>
                <p>SEO Optimization</p>
                <h6>Date</h6>
                <p>October 25, 2019</p>
            </div>  
            <div className={css.share}>
                <h5>Share:</h5>
                <img src={stFbook} alt="" />
                <img src={stInsta} alt="" />
                <img src={stIn} alt="" />
                <img src={stTwitter} alt="" />
                

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBreif;
