import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

const LikeButton = ({songId}) => {
  const [liked, setliked] = useState(()=>{
    return localStorage.getItem(songId)==="true"
  });

  const handleClickLike = (prevLiked ) => {
    setliked((prevLiked) => !prevLiked);

        localStorage.setItem(songId , !liked);
  
  };
  // const redColor = red[50]
  return (
    <div>
      <IconButton onClick={handleClickLike} color={!liked ? "error" : "#000"}>
        <FavoriteIcon style={{ height: "50px", width: "50px" }} />
      </IconButton>
    </div>
  );
};

export default LikeButton;
