import React, { useState } from "react";
import Slider from "react-slick";
import Player from "./Player";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingBox from "./componets/AdvertisingBox/AdvertisingBox";
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
}

export default App;
