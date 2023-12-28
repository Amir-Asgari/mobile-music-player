import React from "react";
import LikeButton from "../MUI/LikeButton/LikeButton";
import "./AlbumList.css";

const AlbumList = ({ image, title, artist }) => {
  return (
    <li className="li">
      <div className="container">
        <div className="imageStyle">
          <img src={image} />
        </div>
        <div className="nameStyle">
          <h3>{title}</h3>
          <h4>{artist}</h4>
        </div>
      </div>
      <div className="likeButton">
        <LikeButton />
      </div>
    </li>
  );
};

export default AlbumList;
