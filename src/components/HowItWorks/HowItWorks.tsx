import css from "./HowItWorks.module.css";

function OurStory() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.top}>
          <h4>How It Works</h4>
          <p className={css.top__txt}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
            suscipit non, turpis.
          </p>
        </div>
        <div className={css.bottom}>
          <div className={css.bottom_right}>
            <div className={css.space}></div>
            <div className={css.active}>
              <div className={css.border}>
                <div className={css.line}></div>
              </div>
              <div className={css.active_text}>
                <p className={css.number}>STEP 1</p>
                <h4 className={css.title}>Planning</h4>
                <p className={css.txt}>
                  Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                  odio. Donec mollis hendrerit risus.
                </p>
              </div>
            </div>
          </div>
          <div className={css.bottom_left}>
            <div className={css.active}>
              <div className={css.active_textLeft}>
                <p className={css.number2}>STEP 2</p>
                <h4 className={css.title}>Research</h4>
                <p className={css.txt__left}>
                  Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                  odio. Donec mollis hendrerit risus.
                </p>
              </div>
              <div className={css.border2}>
                <div className={css.line}></div>
              </div>
            </div>
            <div className={css.space}></div>
          </div>
          <div className={css.bottom_right}>
            <div className={css.space}></div>
            <div className={css.active}>
              <div className={css.border3}>
                <div className={css.line}></div>
              </div>
              <div className={css.active_text}>
                <p className={css.number3}>STEP 3</p>
                <h4 className={css.title}>Optimizing</h4>
                <p className={css.txt}>
                  Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                  odio. Donec mollis hendrerit risus.
                </p>
              </div>
            </div>
          </div>
          <div className={css.bottom_left}>
            <div className={css.active}>
              <div className={css.active_textLeft}>
                <p className={css.number4}>STEP 4</p>
                <h4 className={css.title}>Optimizing</h4>
                <p className={css.txt__left}>
                  Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in
                  odio. Donec mollis hendrerit risus.
                </p>
              </div>
              <div className={css.border4}>
                <div className={css.line}></div>
              </div>
            </div>
            <div className={css.space}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
