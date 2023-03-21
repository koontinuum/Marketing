import React, { FC, useState } from "react";
import styles from "./FaqsCard.module.css";
import plus from "../../../assets/Faqs/plus.svg";
import minus from "../../../assets/Faqs/minus.svg";
// import { title } from "process";

interface FaqsCardProps {
  title: string;
  discrip: string;
}

const FaqsCard: React.FC<FaqsCardProps> = ({ title, discrip }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={styles.faqsDescription}>
        <div className={styles.faqsTitle} onClick={() => setActive(!active)}>
          <p>{title}</p>
          <div>
            {!active ? <img src={plus} alt="" /> : <img src={minus} alt="" />}
          </div>
        </div>
        {active && <div className={styles.faqsDescripAll}><p>{discrip}</p></div>}
      </div>
    </>
  );
};

export default FaqsCard;
