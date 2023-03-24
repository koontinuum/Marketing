import React, { Component } from "react";
import Slider from "react-slick";
import css from "./OurCaseStudies.module.css";
// img imports
import slide1 from "../../assets/differentImages/slide1.svg";
import slide2 from "../../assets/differentImages/slide2.svg";
import slide3 from "../../assets/differentImages/slide3.svg";
import slide4 from "../../assets/differentImages/slide4.svg";
import slide5 from "../../assets/differentImages/slide5.svg";
import slide6 from "../../assets/differentImages/slide6.svg";
import slide7 from "../../assets/differentImages/slide7.svg";
import slide8 from "../../assets/differentImages/slide8.svg";
import slide9 from "../../assets/differentImages/slide9.svg";

export const AppendDots = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
    ) => (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px", border: "none" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "30px",
          color: "#212B36",
          border: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="container">
      <div>
        <h2 className={css.mainText}>Our Case Studies</h2>
        <p className={css.smallText}>
          Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
          libero.
        </p>
        <div className={css.mainSlider}>
          <Slider {...settings}>
            <div>
              <h3>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide1} alt="" />
                    <b>Branding</b>
                    <h1>Event Doesn't Have To Be Hard. Read These 7 Tips</h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide2} alt="" />
                    <b>Marketing</b>
                    <h1>
                      Believing These 7 Myths About Event Keeps You From Growing
                    </h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide3} alt="" />
                    <b>Seo</b>
                    <h1>The 7 Most Successful Event Companies In Region</h1>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide4} alt="" />
                    <b>Seo</b>
                    <h1>How 7 Things Will Change The Way You Approach Event</h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide5} alt="" />
                    <b>Seo</b>
                    <h1>
                      Don't Waste Time! 7 Facts Until You Reach Your Event
                    </h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide6} alt="" />
                    <b>Branding</b>
                    <h1>Apply These 7 Secret Techniques To Improve Event</h1>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide7} alt="" />
                    <b>Marketing</b>
                    <h1>
                      My Life, My Job, My Career: How 7 Simple Event Helped Me
                      Succeed
                    </h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide8} alt="" />
                    <b>Seo</b>
                    <h1>7 Places To Get Deals On Event</h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide9} alt="" />
                    <b>Branding</b>
                    <h1>The 7 Biggest Event Mistakes You Can Easily Avoid</h1>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide1} alt="" />
                    <b>Branding</b>
                    <h1>Event Doesn't Have To Be Hard. Read These 7 Tips</h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide2} alt="" />
                    <b>Marketing</b>
                    <h1>
                      Believing These 7 Myths About Event Keeps You From Growing
                    </h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide3} alt="" />
                    <b>Seo</b>
                    <h1>The 7 Most Successful Event Companies In Region</h1>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide4} alt="" />
                    <b>Seo</b>
                    <h1>How 7 Things Will Change The Way You Approach Event</h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide5} alt="" />
                    <b>Seo</b>
                    <h1>
                      Don't Waste Time! 7 Facts Until You Reach Your Event
                    </h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide6} alt="" />
                    <b>Branding</b>
                    <h1>Apply These 7 Secret Techniques To Improve Event</h1>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide7} alt="" />
                    <b>Marketing</b>
                    <h1>
                      My Life, My Job, My Career: How 7 Simple Event Helped Me
                      Succeed
                    </h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide8} alt="" />
                    <b>Seo</b>
                    <h1>7 Places To Get Deals On Event</h1>
                  </div>
                </div>
                <div className={css.firstContent}>
                  <div>
                    <img src={slide9} alt="" />
                    <b>Branding</b>
                    <h1>The 7 Biggest Event Mistakes You Can Easily Avoid</h1>
                  </div>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AppendDots;
