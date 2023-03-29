import css from "./BigSlider.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import arrow from "../../assets/testimonialsSlide/leftArrow.svg";
import avatar from "../../assets/testimonialsSlide/avatar.svg";
import bgSmallTest from "../../assets/differentImages/BGsmallTest.svg";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FA541C",
        borderRadius: "360px",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <img className={css.nextArrow} src={arrow} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FA541C",
        borderRadius: "360px",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <img className={css.arrow} src={arrow} alt="" />
    </div>
  );
}

export default class BigSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
    };
    return (
      <div className={css.mainBackground}>
        <div className="container">
          <Slider {...settings}>
            <div>
              <h3 className={css.centerSettings}>
                <div className={css.mainSlide}>
                  <img src={bgSmallTest} alt="" />
                  <div className={css.leftContent}>
                    <p>February 28, 2018 . 8 min read</p>
                    <h1>How to Maximize Your ROI Through Scientific SEM?</h1>
                    <b>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </b>
                    <a href="">
                      <img src={avatar} alt="" /> Jane Cooper
                    </a>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3 className={css.centerSettings}>
                <div className={css.mainSlide}>
                  <img src={bgSmallTest} alt="" />
                  <div className={css.leftContent}>
                    <p>February 28, 2018 . 8 min read</p>
                    <h1>How to Maximize Your ROI Through Scientific SEM?</h1>
                    <b>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </b>
                    <a href="">
                      <img src={avatar} alt="" /> Jane Cooper
                    </a>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3 className={css.centerSettings}>
                <div className={css.mainSlide}>
                  <img src={bgSmallTest} alt="" />
                  <div className={css.leftContent}>
                    <p>February 28, 2018 . 8 min read</p>
                    <h1>How to Maximize Your ROI Through Scientific SEM?</h1>
                    <b>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </b>
                    <a href="">
                      <img src={avatar} alt="" /> Jane Cooper
                    </a>
                  </div>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
