import React from "react";
import css from "./OurStory.module.css";

function OurStory() {
  return (
    <div className={css.ourStory}>
      <div className="container">
        <div className={css.story}>
          <div className={css.storyTitle}>
            <h2>Our Story</h2>
            <p>
              Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
              suscipit non, turpis.
            </p>
          </div>
        </div>

        {/* /////////////////////////////////////////////////////////////////////// */}
        <div className={css.history}>
          <div className={css.bisnessR}>
            <div className={css.bisnessTitR}>
              <div className={css.orange}></div>
              <h4 className={css.tOrange}>2021</h4>
            </div>
            <div className={css.bisnessDesR}>
              <h5>Business Conception</h5>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                odio. Donec mollis hendrerit risus.
              </p>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////////////// */}

          <div className={css.bisnessL}>
            <div className={css.bisnessTitL}>
              <div className={css.blue}></div>
              <h4 className={css.tBlue}>2020</h4>
            </div>
            <div className={css.bisnessDesL}>
              <h5>Legal Rewiew</h5>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                odio. Donec mollis hendrerit risus.
              </p>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////////////// */}

          <div className={css.bisnessR}>
            <div className={css.bisnessTitR}>
              <div className={css.yellow}></div>
              <h4 className={css.tYellow}>2019</h4>
            </div>
            <div className={css.bisnessDesR}>
              <h5>Infrastucture Design</h5>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                odio. Donec mollis hendrerit risus.
              </p>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////////////// */}

          <div className={css.bisnessL}>
            <div className={css.bisnessTitL}>
              <div className={css.green}></div>
              <h4 className={css.tGreen}>2018</h4>
            </div>
            <div className={css.bisnessDesL}>
              <h5>Company Established</h5>
              <p>
                Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                odio. Donec mollis hendrerit risus.
              </p>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
}

export default OurStory;
