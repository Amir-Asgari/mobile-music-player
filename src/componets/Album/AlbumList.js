import React from 'react'

import LikeButton from '../MUI/LikeButton/LikeButton';

const AlbumList = ({image , title , artist}) => {
  return (
    <li>
     <div>
      <div>
        <img src={image}/>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>
     </div>
     <div>
      <LikeButton/>
     </div>
     </li>
  )
}

export default AlbumList
