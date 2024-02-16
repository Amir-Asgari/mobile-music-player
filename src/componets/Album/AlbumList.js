import React from "react";
import LikeButton from "../MUI/LikeButton/LikeButton";
import "./AlbumList.css";

const AlbumList = ({ image, title, artist, onClick, isActive, songId }) => {
  return (
    <li className={`li ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="container">
        <div className="imageStyle">
          <img src={image} alt="image" />
        </div>
        <div className="nameStyle">
          <h4 style={{ color: "red", fontSize: "26px" }}>{title}</h4>
          <h4 style={{ color: "red", fontSize: "26px" }}>{artist}</h4>
        </div>
      </div>
      <div className="likeButton">
        <LikeButton songId={songId} /> 
      </div>
    </li>
  );
};

export default AlbumList;
