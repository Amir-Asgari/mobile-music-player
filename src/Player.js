import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import songsData from './songs.json';
import './Player.css'
<<<<<<< HEAD
import SongSlider from './componets/songSlider/SongSlider';
=======
import SongSlider from './componets/SongSlider';
>>>>>>> 4fffe9c2f4fe57f32a13135484e5c74284bca4d3

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
