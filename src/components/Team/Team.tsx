import React from "react";
import styles from "./Team.module.css";
import Prev from '../../assets/Team/btnPrev.svg'
import Next from '../../assets/Team/btnNext.svg'

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
            <div className={styles.btnPrev}> <Prev/> </div>
            <div className={styles.btnNext}> <Next/> </div>
          </div>
        </div>
        <div className={styles.teamImg}>
            osijf;slfiosjg[osij]
        </div>
      </div>
      
    </div>
  );
}

export default Team;
