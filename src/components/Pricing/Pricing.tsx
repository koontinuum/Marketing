import styles from "./Pricing.module.css";
import Basic from "../../assets/Pricing/basic.svg";
import Standard from "../../assets/Pricing/standard.svg";
import Premium from "../../assets/Pricing/premium.svg";
import Vector from "../../assets/Pricing/vector.svg";

function Pricing() {
  return (
    <div className="container">
      <div className={styles.pricing}>
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
              <div className={styles.basicItemDescrip}>
                Proin viverra, ligula sit amet ultrices semper, ligula arcu
                tristique sapien
              </div>
              <div className={styles.basicItemList}>
                <ul className={styles.rangeUl}>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Auto update mode
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Online operator 24/7
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> International posting
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.basicItemBtn}>
                <button>Get Started</button>
              </div>
            </div>
          </div>
          <div className={styles.standard}>
            <div className={styles.basicItem}>
              <div className={styles.basicItemTitle}>
                <p className={styles.itemPtxt}>Standard</p>
                <img src={Standard} alt="" />
              </div>
              <div className={styles.basicItemPrice}>
                <h5>$59</h5>
                <h6>/mo</h6>
              </div>
              <div className={styles.basicItemDescrip}>
                Maecenas nec odio et ante tincidunt tempus.
              </div>
              <div className={styles.basicItemList}>
                <ul className={styles.rangeUl}>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Auto update mode
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Online operator 24/7
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> International posting
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Unique newsletters
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.basicItemBtn}>
                <button>Get Started</button>
              </div>
            </div>
          </div>
          <div className={styles.premium}>
            <div className={styles.basicItem}>
              <div className={styles.basicItemTitle}>
                <p className={styles.itemPtxt}>Premium</p>
                <img src={Premium} alt="" />
              </div>
              <div className={styles.basicItemPrice}>
                <h5>$99</h5>
                <h6>/mo</h6>
              </div>
              <div className={styles.basicItemDescrip}>
                Sed lectus. Sed consequat, leo eget bibendum sodales
              </div>
              <div className={styles.basicItemList}>
                <ul className={styles.rangeUl}>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Auto update mode
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Online operator 24/7
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> International posting
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> Unique newsletters
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={Vector} alt="" /> 20 Design templates
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.basicItemBtn}>
                <button>Get Started</button>
              </div>
              <div className={styles.basicItemDescrip}></div>
              <div className={styles.basicItemList}></div>
              <div className={styles.basicItemBtn}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
