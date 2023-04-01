import React, { FC } from "react";
import css from "./SlidersCard.module.css";

interface SlidersCardProps {
  id: number;
  img: string;
  title1: string;
  title2: string;
  desc: string;
  userImg: string;
  userName: string;
  dot: string;
}

const SlidersCard: FC<SlidersCardProps> = ({
  img,
  title1,
  title2,
  desc,
  userImg,
  userName,
  dot,
}) => {
  return (
    <div className={css.cardMain}>
      <img className={css.cardBg} src={img} alt="image" />
      <div className={css.contentMain}>
        <div className={css.dateMain}>
          <p className={css.date}>{title1}</p>
          <img className={css.dotp} src={dot} alt="dot" />
          <p className={css.date}>{title2}</p>
        </div>
        <h2 className={css.title}>{desc}</h2>
        <div className={css.userBlock}>
          <img src={userImg} alt="image" />
          <p className={css.userName}>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default SlidersCard;
