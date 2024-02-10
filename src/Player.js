import React from 'react';
import SongSlider from './componets/songSlider/SongSlider';

const Player = ({ selectedAlbum }) => {
    return (
        <div>
            <SongSlider selectedAlbum={selectedAlbum} />
        </div>
    );
};

export default Player;
