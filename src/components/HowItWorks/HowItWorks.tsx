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
          <div className={css.firstContent}>
            <b>STEP 1</b>
            <h1>Planning</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={css.secondContent}>
            <b>STEP 1</b>
            <h1>Planning</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={css.thirdContent}>
            <b>STEP 1</b>
            <h1>Planning</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={css.fourthContent}>
            <b>STEP 1</b>
            <h1>Planning</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
