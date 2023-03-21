import React, { useMemo } from "react";
import styles from "./Faqs.module.css";
import minus from "../../assets/Faqs/minus.svg";
import plus from "../../assets/Faqs/plus.svg";
import faqsRight from "../../assets/Faqs/faqsRight.svg";
import FaqsCard from "./FaqsCard/FaqsCard";
import { Accardiondata } from "../../FaqsData";

function Faqs() {
  const render = useMemo(
    () =>
      Accardiondata.map((item) => (
        <FaqsCard key={item.id} {...item} />
      )),
    []
  );
  return (
    <div className="container">
      <div className={styles.faqs}>
        <div className={styles.faqsLeft}>
          <p className={styles.faqsF}>FAQS</p>
          <p className={styles.faqsTitle}>Frequently Asked <br /> Questions</p>
          {/* <div className={styles.faqsDescripTop}>
            <p>Sed augue ipsum, egestas nec, vestibulum et</p>
            <img src={minus} alt="" />
          </div>
          <div className={styles.faqsDescripBottom}>
            <p>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </p>
          </div> */}
          
        <>{render}</>          
         <div>
        
         </div>
        </div>
        <div className={styles.faqsRight}>
          <img src={faqsRight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
