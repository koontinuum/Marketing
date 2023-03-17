import * as React from "react";
import styles from "./Team.module.css";
import Prev from "../../assets/Team/btnPrev.svg";
import Next from "../../assets/Team/btnNext.svg";
import Pena from "../../assets/Team/pena.svg";
import Ralph from "../../assets/Team/ralph.svg";
import Marvin from "../../assets/Team/marvin.svg";

function Team() {
  return (
    <div className={styles.team}>
      <div className={styles.teamAll}>
        <div className={styles.teamInfo}>
          <h4>Team</h4>
          <h2>Meet Our Team</h2>
          <p className={styles.teamTxt}>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>

          <div className={styles.btnVector}>
            <div className={styles.btnPrev}>
              {" "}
              <img src={Prev} alt="" />{" "}
            </div>
            <div className={styles.btnNext}>
              {" "}
              <img src={Next} alt="" />{" "}
            </div>
          </div>
        </div>
        <div className={styles.teamImg}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={Ralph} alt="" />
              <p className={styles.name}>Ralph Edwards</p>
              <p className={styles.jobTitle}>Project Manager</p>
            </div>

            <div className={styles.card}>
              <img src={Pena} alt="" />
              <p className={styles.name}>Eleanor Pena</p>
              <p className={styles.jobTitle}>UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
