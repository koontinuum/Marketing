import React, { Component } from "react";
import Slider from "react-slick";
import css from "./Testimonials.module.css";
import arrow from "../../assets/testimonialsSlide/leftArrow.svg";
import avatar from "../../assets/testimonialsSlide/avatar.svg";

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

export const Testimonials = () => {
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
    <div className={css.backSkider}>
      <div className={css.sliderWrapper + " container"}>
        <div className={css.mainText}>
          <p>Testimonials</p>
          <h1>Who Love Our Work</h1>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <h3>
                <div className={css.left}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                </div>
                <div className={css.right}>
                  <img src={avatar} alt="" />
                  <h1>Robert Fox</h1>
                  <p>Designer</p>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.left}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                </div>
                <div className={css.right}>
                  <img src={avatar} alt="" />
                  <h1>Robert Fox</h1>
                  <p>Designer</p>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.left}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                </div>
                <div className={css.right}>
                  <img src={avatar} alt="" />
                  <h1>Robert Fox</h1>
                  <p>Designer</p>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className={css.left}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                </div>
                <div className={css.right}>
                  <img src={avatar} alt="" />
                  <h1>Robert Fox</h1>
                  <p>Designer</p>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
