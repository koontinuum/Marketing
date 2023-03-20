import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/Footer/footerLogo.svg";
import email from "../../assets/Footer/email.svg";
import location from "../../assets/Footer/location.svg";
import logo1 from "../../assets/Footer/faceBookIcon.svg";
import logo2 from "../../assets/Footer/instagramIcon.svg";
import logo3 from "../../assets/Footer/inIcon.svg";
import logo4 from "../../assets/Footer/twitterIcon.svg";

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
            <div className={styles.logos}>
              <a href="">
                <img src={logo1} alt="" />
              </a>
              <a href="">
                <img src={logo2} alt="" />
              </a>
              <a href="">
                <img src={logo3} alt="" />
              </a>
              <a href="">
                <img src={logo4} alt="" />
              </a>
            </div>
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
            <button>❯</button>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2021. All rights reserved</p>
          <div>
            Help Center <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
