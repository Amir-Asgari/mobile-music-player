// AlbumList.js
import React from "react";
import { Link } from "react-router-dom";
import SongSlider from "../songSlider/SongSlider";
import Player from "../../Player";
import Slider from "react-slick";


const AlbumList = ({ albums }) => {
  // console.log(albums.playlists);
  
  return (
    <Slider>
      <div>
        {albums.playlists.map((album, index) => (
          <Link to={`/album/${album.songs}`} key={index}>
            <div>
              <img src={album.image} alt={album.imageAlt} />
              <h3>{album.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Slider>
  );
};

export default AlbumList;

// import React from 'react';
// import Player from '../../Player';
// import './AlbumList.css';  // اگر نیاز به استایل دارید

// const AlbumList = ({ albums, onAlbumClick }) => {
//   return (
//     <div className="album-list">
//       {albums.map((album) => (
//         <Player key={album.id} song={album.song} onClick={()=>onAlbumClick(album.id)} />
//       ))}
//     </div>
//   );
// };

// export default AlbumList;
