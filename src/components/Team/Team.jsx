import { useRef } from "react";
import styles from "./Team.module.css";
import Pena from "../../assets/Team/pena.svg";
import Marvin from "../../assets/Team/test1.svg";
import Ralph from "../../assets/Team/ralph.svg";
import Right from "../../assets/Team/btnNext.svg";
import Left from "../../assets/Team/btnPrev.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.subTitle}>Team</span>
          <h1 className={styles.title}>Meet Our Team</h1>
          <p className={styles.text}>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
        </div>
        <div className={styles.infoBtn}>
          <button
            onClick={() => arrowRef.current.slickPrev()}
            className={styles.btnColor}
          >
            <img src={Left} alt="" />
          </button>
          <button
            onClick={() => arrowRef.current.slickNext()}
            className={styles.btnColor}
          >
            <img src={Right} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <Slider ref={arrowRef} {...settings}>
          <div className={styles.card_sample}>
            <div className={styles.cardImg}>
              <img className={styles.imgBurder} src={Ralph} alt="" />
            </div>
            <p className={styles.cardName}>Ralph Edwards</p>
            <p className={styles.cardProff}>Project Manager</p>
          </div>
          <div>
            <div className={styles.cardImg}>
              <img className={styles.imgBurder} src={Pena} alt="" />
            </div>
            <p className={styles.cardName}>Eleanor Pena</p>
            <p className={styles.cardProff}>UI Designer</p>
          </div>
          <div>
            <div className={styles.cardImg}>
              <img className={styles.imgBurder} src={Marvin} alt="" />
            </div>
            <p className={styles.cardName}>Marvin McKinney</p>
            <p className={styles.cardProff}>Full Stack Devolper</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Team;
