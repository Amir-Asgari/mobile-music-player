import React from "react";
import AdvertisingBox from "../AdvertisingBox/AdvertisingBox";
import albumsData from "../../songs.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import Sliders from "../Sliders/Sliders";
import Slider from "react-carousel";


const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];

const HomePage = () => {
  return (
    <div className="body">
      <div className="AdvertisingBox">
        <AdvertisingBox />
      </div>
      <div className="Sliders">
        <Sliders sliderData={albumsData.playlists} />
      </div>
      <div>
        <Slider responsive={responsive} margin='50px'>
          <h1 key={1}>1</h1>
          <h1 key={2}>2</h1>
          <h1 key={3}>1</h1>
          <h1 key={4}>2</h1>
          <h1 key={5}>1</h1>
          <h1 key={6}>2</h1>
          <h1 key={7}>1</h1>
          <h1 key={8}>2</h1>
          <h1 key={9}>1</h1>
          <h1 key={10}>2</h1>
          <h1 key={11}>1</h1>
          <h1 key={12}>2</h1>
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
