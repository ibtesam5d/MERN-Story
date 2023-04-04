import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = ({
  children,
  slidesToShow,
  adaptiveHeight,
  centerPadding,
  centerMode,
}) => {
  return (
    <div className="slide" data-testId="slide">
      <div className="sliderContainer">
        <Slider
          slidesToShow={slidesToShow}
          adaptiveHeight={adaptiveHeight}
          centerPadding={centerPadding}
          centerMode={centerMode}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
