import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500
  };

  return (
    <>
      <h2>Slider</h2>
      <Slider {...settings}>
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
      </Slider>
    </>
  )
}