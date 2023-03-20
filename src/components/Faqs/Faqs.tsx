import React from "react";
import styles from "./Faqs.module.css";
import minus from "../../assets/Faqs/minus.svg";
import plus from "../../assets/Faqs/plus.svg";
import faqsRight from "../../assets/Faqs/faqsRight.svg";

function Faqs() {
  return (
    <div className="container">
      <div className={styles.faqs}>
        <div className={styles.faqsLeft}>
          <p className={styles.faqsF}>FAQS</p>
          <p className={styles.faqsTitle}>Frequently Asked Questions</p>
          <div className={styles.faqsDescripTop}>
            <p>Sed augue ipsum, egestas nec, vestibulum et</p>
            <img src={minus} alt="" />
          </div>
          <div className={styles.faqsDescripBottom}>
            <p>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </p>
          </div>
          <div className={styles.faqsDescripAll}>
            <p>
              Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.
            </p>
            <img src={plus} alt="" />
          </div>
          <div className={styles.faqsDescripAll}>
            <p>Ut varius tincidunt libero.</p>
            <img src={plus} alt="" />
          </div>
          <div className={styles.faqsDescripAll}>
            <p>In ut quam vitae odio lacinia tincidunt.</p>
            <img src={plus} alt="" />
          </div>
          <div className={styles.faqsDescripAll}>
            <p>Fusce vel dui Morbi nec metus.</p>
            <img src={plus} alt="" />
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
