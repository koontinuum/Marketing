import React from "react";
import styles from "./Pricing.module.css";
import Basic from "../../assets/Pricing/basic.svg";

function Pricing() {
  return (
    <div className={styles.pricing + " container"}>
      <div className={styles.pricingUp}>
        <div className={styles.pricingUpLeft}>
          <p className={styles.pricingP}>pricing</p>
          <p className={styles.pricingTitle}>Check Our Pricing</p>
          <p className={styles.pricingTxt}>
            Choose the perfect plan for your needs. <br />
            Always flexible to grow
          </p>
        </div>
        <div className={styles.pricingUpRight}>
          <div className={styles.pricingUpRightItem}>
            <p>MONTHLY</p>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
            <p>YEARLY (save 10%)</p>
          </div>
        </div>
      </div>
      <div className={styles.pricingDown}>
        <div className={styles.basic}>
          <div className={styles.basicItem}>
            <div className={styles.basicItemTitle}>
              <p className={styles.itemPtxt}>Basic</p>
              <img src={Basic} alt="" />
            </div>
            <div className={styles.basicItemPrice}>
              <h5>$29</h5>
              <h6>/mo</h6>
            </div>
            <div className={styles.basicItemDescrip}></div>
            <div className={styles.basicItemList}></div>
            <div className={styles.basicItemBtn}></div>
          </div>
        </div>
        <div className={styles.standard}>standard</div>
        <div className={styles.premium}>premium</div>
      </div>
    </div>
  );
}

export default Pricing;
