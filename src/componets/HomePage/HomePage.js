import React from "react";
import AdvertisingBox from "../AdvertisingBox/AdvertisingBox";
import albumsData from "../../songs.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import Sliders from "../Sliders/Sliders";
import Slider from "react-slick";

const responsive = [
  { breakPoint: 390, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 389, cardsToShow: 2 },
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
      <div className="Slider">
        <Slider responsive={responsive} 
        // margin='50px'
        >
          <h1 key={1}>1</h1>
          <h1 key={2}>2</h1>
          <h1 key={3}>3</h1>
          <h1 key={4}>4</h1>
          <h1 key={5}>5</h1>
          <h1 key={6}>6</h1>
          <h1 key={7}>7</h1>
          <h1 key={8}>8</h1>
          <h1 key={9}>9</h1>
          <h1 key={10}>10</h1>
          <h1 key={11}>11</h1>
          <h1 key={12}>12</h1>
          <h1 key={13}>13</h1>
          <h1 key={14}>14</h1>
          <h1 key={15}>15</h1>
          <h1 key={16}>16</h1>
          <h1 key={17}>17</h1>
          <h1 key={18}>18</h1>
          <h1 key={19}>19</h1>
          <h1 key={20}>20</h1>
          <h1 key={21}>21</h1>
          <h1 key={22}>22</h1>
          <h1 key={23}>23</h1>
          <h1 key={24}>24</h1>
          <h1 key={25}>25</h1>
          <h1 key={26}>26</h1>
          <h1 key={27}>27</h1>
          <h1 key={28}>28</h1>
          <h1 key={29}>29</h1>
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
