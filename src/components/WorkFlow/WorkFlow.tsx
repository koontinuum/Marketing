import React from "react";
import planning from "../../assets/workFlowLogo/planning.svg";
import research from "../../assets/workFlowLogo/research.svg";
import optimizing from "../../assets/workFlowLogo/optimizing.svg";
import results from "../../assets/workFlowLogo/results.svg";
import arrowBtn from "../../assets/workFlowLogo/arrowBtn.svg";
import css from "./WorkFlow.module.css";

function WorkFlow() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.up}>
          <b>Work Flow</b>
          <h1>Working Process</h1>
          <p>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
            suscipit non, turpis.
          </p>
        </div>
        <div className={css.bottom}>
          <div className={css.planning}>
            <img src={planning} alt="" />
            <button>Planning →</button>
          </div>
          <div className={css.research}>
            <img src={research} alt="" />
            <button>Research →</button>
          </div>
          <div className={css.optimizing}>
            <img src={optimizing} alt="" />
            <button>Optimizing →</button>
          </div>
          <div className={css.results}>
            <img src={results} alt="" />
            <button>Results →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
