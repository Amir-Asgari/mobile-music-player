import React from 'react';
import songsData from './songs.json';
import './Player.css'
import SongSlider from './componets/songSlider/SongSlider';

const Player = ({selectedAlbum}) => {
    //   const { playlists } = songsData;
    // const songs = playlists[0].songs;

    return (
        <div>
            <SongSlider songs={selectedAlbum} />
        </div>
    );
};

export default Player;
