import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import songsData from './songs.json';
import './Player.css'
import SongSlider from './componnets/SongSlider';

const Player = ({selectedAlbum}) => {
      const { playlists } = songsData;
    const songs = playlists[0].songs;

    return (
        <div>
            <SongSlider songs={selectedAlbum} />
        </div>
    );
};

export default Player;
