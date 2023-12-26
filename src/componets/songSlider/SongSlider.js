import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import songsData from '../../songs.json';
import './SongSlider.css';

const SongSlider = () => {
    const { playlists } = songsData;
    const songs = playlists[0].songs;
    const [currentSong, setCurrentSong] = React.useState(0);

    const nextSong = () => {
        setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
    };

    const prevSong = () => {
        setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
    };

    return (
        <div>
            <H5AudioPlayer
                autoPlay
                src={songs[currentSong].url}
                onEnded={nextSong}
            />
            <h2>{songs[currentSong].title}</h2>
            <h3>{songs[currentSong].artist}</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    style={{ width: "50%", display: "flex", justifyContent: "center", borderRadius: "50%" }}
                    src={songs[currentSong].image} alt={songs[currentSong].artist} />
            </div >
            <div className="controls">
                <button onClick={prevSong}>قبلی</button>
                <button onClick={nextSong}>بعدی</button>
            </div>
        </div>
    );
};

export default SongSlider;
