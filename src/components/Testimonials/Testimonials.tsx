import Slider from "react-slick";
import css from "./Testimonials.module.css";
import arrow from "../../assets/testimonialsSlide/leftArrow.svg";
import arrow1 from "../../assets/testimonialsSlide/rightArrow.svg";

import avatar from "../../assets/testimonialsSlide/avatar.svg";
import { Component } from "react";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
      }}
      onClick={onClick}
    >
      <img src={arrow1} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    >
      <img src={arrow} alt="" />
    </div>
  );
}

export default class CustomArrows extends Component {
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
      <div className={css.slideContent}>
        <div className="container">
          <div>
            <h2>Custom Arrows</h2>
            <Slider {...settings}>
              <div>
                <h3 className={css.slide}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                  <h1>
                    <img src={avatar} alt="" />
                    <p>Robert Fox</p>
                    <b>Designer</b>
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className={css.slide}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                  <h1>
                    <img src={avatar} alt="" />
                    <p>Robert Fox</p>
                    <b>Designer</b>
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className={css.slide}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                  <h1>
                    <img src={avatar} alt="" />
                    <p>Robert Fox</p>
                    <b>Designer</b>
                  </h1>
                </h3>
              </div>
              <div>
                <h3 className={css.slide}>
                  <p>
                    Amazing experience i love it a lot. Thanks to the team that
                    dreams come true, great! I appreciate there attitude and
                    approach.
                  </p>
                  <h1>
                    <img src={avatar} alt="" />
                    <p>Robert Fox</p>
                    <b>Designer</b>
                  </h1>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
