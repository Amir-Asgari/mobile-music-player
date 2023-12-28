import React from 'react'
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AlbumList = () => {
  return (
    <div>
     <div>
      <div>
        <image src={image}/>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>
     </div>
     <div>

     </div>
     </div>
  )
}

export default AlbumList
