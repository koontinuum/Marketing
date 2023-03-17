import React from "react";
import css from "./UpFooter.module.css";
import listMessage from "../../assets/footerImg/listMessage.svg";
function UpFooter() {
  return (
    <div className={css.main}>
      <div className={css.left}>
        <img src={listMessage} alt="" />
        <h1>
          Sign Up For Newsletter <b>Receive 50% discount on first project</b>
        </h1>
      </div>
      <div className={css.right}>
        <input type="text" placeholder="Enter your email" />
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default UpFooter;
