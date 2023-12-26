import React from "react";
import AdvertisingBox from "../AdvertisingBox/AdvertisingBox";
import SongSlider from "../songSlider/SongSlider";
import { Link } from "react-router-dom";
import albumsData from '../../songs.json'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomePage = () => {
//     if (!Array.isArray(sliderData) || sliderData.length <= 0) {
//     return null;
//   }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
    // centerPadding: "40px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    slidesPerRow: 1,
    dots: true,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };
  return (
    <div>
      <AdvertisingBox />
      <Slider {...settings} className="song-slider">
      <div>
        {albumsData.playlists.map((album, index) => (
          <Link to={`/album/${album.songs}`} key={index}>
            <div>
              <img src={album.image} alt={album.imageAlt} />
              <h3>{album.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Slider>    </div>
  );
};

export default HomePage;
