import React from 'react';
import Player from '../../Player';
import './AlbumList.css';  // اگر نیاز به استایل دارید

const AlbumList = ({ albums, onAlbumClick }) => {
  return (
    <div className="album-list">
      {albums.map((album) => (
        <Player key={album.id} song={album.song} onClick={()=>onAlbumClick(album.id)} />
      ))}
    </div>
  );
};

export default AlbumList;
