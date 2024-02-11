import React from "react";
import LikeButton from "../MUI/LikeButton/LikeButton";
import "./AlbumList.css";

const AlbumList = ({ image, title, artist }) => {
  return (
    <li className="li">
      <div className="container">
        <div className="imageStyle">
          <img src={image} alt="image"/>
        </div>
        <div className="nameStyle">
          <h4 style={{color:'red', fontSize:'26px'}}>{title}</h4>
          <h4 style={{color:'red', fontSize:'26px'}}>{artist}</h4>
        </div>
      </div>
      <div className="likeButton">
        <LikeButton />
      </div>
    </li>
  );
};

export default AlbumList;
