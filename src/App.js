import React, { useState } from "react";
import Slider from "react-slick";
import Player from "./Player";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingBox from "./componets/AdvertisingBox/AdvertisingBox";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AlbumList from "./componets/Album/AlbumList";
import albumsData from "./songs.json";
import HomePage from "./componets/HomePage/HomePage";
import AlbumPlayingList from "./componets/AlbumPlayingList/AlbumPlayingList";
// import './service-worker'

function App({ sliderData }) {
  const [playlist, setPlayList] = useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/album" element={<AlbumList albums={albumsData} />} />
          <Route path="/album/:id" element={<AlbumPlayingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
=======
import { BrowserRouter as Router, Route, Switch , Routes, BrowserRouter } from "react-router-dom";
import AlbumList from "./componets/Album/AlbumList";
import albumsData from "./songs.json";
// import './service-worker'

function App({ sliderData }) {
  const [playlist, setPlayList] = useState();

  // if (!Array.isArray(sliderData) || sliderData.length <= 0) {
  //   return null;
  // }

  // const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
  //   const { className, onClick } = props;

  //   return (
  //     <div {...props} className="custom-prevArrow" onClick={onClick}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  //       </svg>
  //     </div>
  //   );
  // };
  // const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
  //   const { className, onClick } = props;

  //   return (
  //     <div {...props} className="custom-nextArrow" onClick={onClick}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  //       </svg>
  //     </div>
  //   );
  // };

  // const sliderSettings = {
  //   className: "center",
  //   centerMode: true,
  //   // centerPadding: "40px",
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   speed: 500,
  //   slidesPerRow: 1,
  //   dots: true,
  //   nextArrow: <GalleryNextArrow />,
  //   prevArrow: <GalleryPrevArrow />,
  // };
// console.log(albumsData.playlists);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AlbumList albums={albumsData} />}/>
          <Route path="/album/:id" element={<AlbumList albums={albumsData} />}/>
      </Routes>
    </BrowserRouter>
    );
>>>>>>> 4fffe9c2f4fe57f32a13135484e5c74284bca4d3
}

export default App;
