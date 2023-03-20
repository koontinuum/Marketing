import React from "react";
import css from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <div className={css.mainContent}>
      <div className="container">
        <div className={css.up}>
          <h1>How It Works</h1>
          <p>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
            suscipit non, turpis.
          </p>
        </div>
        <div className={css.bottom}>
          <div className={css.firstContent}></div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
