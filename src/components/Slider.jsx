import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
};
const CustomSlider = ({ items }) => {
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <li>
          <Link to="/one">
          <img src={item.src} style={{width:"100vw", height:"200px"}} alt="" />
          </Link>
         
        </li>
      ))}
    </Slider>
  );
};

export default CustomSlider;
