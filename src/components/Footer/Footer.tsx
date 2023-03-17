import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/Footer/footerLogo.svg";
import email from "../../assets/Footer/email.svg";
import location from "../../assets/Footer/location.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <img src={footerLogo} alt="" />
        <div className={styles.footerContent}>
          <div className={styles.left}>
            <p>
              The starting point for your next project based on
              easy-to-customize Material-UI © helps you build apps faster and
              better.
            </p>
          </div>
          <div className={styles.center}>
            <a href="">
              <img src={email} alt="" />
              info@example.com
            </a>

            <a href="">
              <img src={location} alt="" />
              655 Schaefer Dale
            </a>
          </div>
          <div className={styles.right}>
            <input type="text" name="" id="" placeholder="Email address" />
            <button>s</button>
          </div>
          
        </div>
        <div className={styles.footerBottom}>
                <p>© 2021. All rights reserved</p>
                <p>Help Center <p>Terms of Service</p> </p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
