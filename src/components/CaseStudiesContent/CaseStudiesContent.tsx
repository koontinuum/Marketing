import React from "react";
import styles from "./CaseStudiesContent.module.css";
import headImg from "../../assets/CaseStudiesContent/headImg.svg";
import ProjectBreif from "../ProjectBreif/ProjectBreif";

function CaseStudiesContent() {
  return (
    <div className="container">
      <div className={styles.caseStPage}>
        <div className={styles.headImg}>
          <img src={headImg} alt="" />
        </div>
      </div>
      <ProjectBreif />
    </div>
  );
}

export default CaseStudiesContent;
