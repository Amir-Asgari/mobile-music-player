import React from "react";
import AdvertisingBox from "../AdvertisingBox/AdvertisingBox";
import albumsData from "../../songs.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import Sliders from "../Sliders/Sliders";

const HomePage = () => {
  return (
    <div className="body">
      <div className="AdvertisingBox">
        <AdvertisingBox />
      </div>
      <div className="Sliders">
        <Sliders sliderData={albumsData.playlists} />
      </div>
    </div>
  );
};

export default HomePage;
