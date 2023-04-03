import React, { Component } from "react";
import Slider from "react-slick";
import css from "./LatestPosts.module.css";
import arrow from "../../assets/testimonialsSlide/leftArrow.svg";
import avatar from "../../assets/testimonialsSlide/avatar.svg";
import imageBackground from "../../assets/latestPostImg/imageBackground.svg";
import avatar2 from "../../assets/latestPostImg/avatar2.svg";
import avatar3 from "../../assets/latestPostImg/avatar3.svg";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img className={css.nextArrow} src={arrow} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img className={css.prevArrow} src={arrow} alt="" />
    </div>
  );
}

export const LatestPosts = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

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
    <>
      <div className={css.sliderWrapper + " container"}>
        <div className={css.mainText}>
          <h1>Latest Posts</h1>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <h3>
                <div className={css.test}>
                  <p>15 Dec 2020 · 8 min read </p>
                  <h1>Any mechanical keyboard enthusiasts in design?</h1>
                  <b>
                    <img src={avatar} alt="" />
                    Maddox Fletcher
                  </b>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.imageBackground}>
                  <img src={imageBackground} alt="" />
                  <div className={css.text}>
                    <p>15 Dec 2020 · 8 min read </p>
                    <h1>
                      How to design a product that can grow itself 10x in year:
                    </h1>
                    <b>
                      <img src={avatar2} alt="" />
                      Cruz Truong
                    </b>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.test}>
                  <p>15 Dec 2020 · 8 min read </p>
                  <h1>Any mechanical keyboard enthusiasts in design?</h1>
                  <b>
                    <img src={avatar3} alt="" />
                    Margaret Donnelly
                  </b>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.imageBackground}>
                  <img src={imageBackground} alt="" />
                  <div className={css.text}>
                    <p>15 Dec 2020 · 8 min read </p>
                    <h1>
                      How to design a product that can grow itself 10x in year:
                    </h1>
                    <b>
                      <img src={avatar2} alt="" />
                      Maddox Fletcher
                    </b>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.test}>
                  <p>15 Dec 2020 · 8 min read </p>
                  <h1>Any mechanical keyboard enthusiasts in design?</h1>
                  <b>
                    <img src={avatar3} alt="" />
                    Margaret Donnelly
                  </b>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
      <div className={css.phoneWrapper}>
        <h1>Latest Posts</h1>
        <div className={css.main}>
          <p>15 Dec 2020 . 8 min read </p>
          <h1>Any mechanical keyboard enthusiasts in design?</h1>
          <div className={css.mainContent}>
            <img src={avatar} alt="" />
            <p>Jane Cooper</p>
          </div>
        </div>
      </div>
    </>
  );
};
