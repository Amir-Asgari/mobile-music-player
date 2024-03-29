import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./Sliders.css";

const Sliders = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    console.log("there no song in Sliders");
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((album, id) => (
        <div key={id}>
          <Link to={`/album/${album.id}`} key={id}>
            <div>
              <img
                style={{ width: "200px" , height: "200px"}}
                src={album.image}
                alt={album.imageAlt}
              />
              <h3>{album.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
