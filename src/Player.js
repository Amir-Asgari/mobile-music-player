import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import songsData from './songs.json';
import './Player.css'
import SongSlider from './componnets/SongSlider';

const Player = () => {
    // const [currentSong, setCurrentSong] = useState(0);

    // const playSong = () => {
    //     console.log("Song is playing");
    // };

    // const pauseSong = () => {
    //     console.log("Song is paused");
    // };

    // const nextSong = () => {
    //     setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
    // };

    // const prevSong = () => {
    //     setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
    // };

    const { playlists } = songsData;
    const songs = playlists[0].songs;

    return (
        <div>
            <SongSlider songs={songs} />

            {/* <AudioPlayer
                autoPlay
                src={songs[currentSong].url}
                onPlay={playSong}
                onPause={pauseSong}
                onEnded={nextSong}
            // متد‌های دیگر مانند onEnded و ...
            />
            <h1>{songs[currentSong].title}</h1>
            <h2>{songs[currentSong].artist}</h2>
            <div style={{ display: 'flex' , justifyContent:"center" }}>
                <img 
                style={{ borderRadius: "50%"}}
                src={songs[currentSong].image} alt={songs[currentSong].artist} />
            </div> */}
{/* 
            <span style={{ display: 'flex', justifyContent: "center" }}>
                <button onClick={prevSong}>Previous</button>
                <button onClick={playSong}>Play</button>
                <button onClick={pauseSong}>Pause</button>
                <button onClick={nextSong}>Next</button>
            </span> */}
            {/* <div className="dance">
                <img src="https://media2.giphy.com/media/XMaB779YCmP9m/giphy.gif" alt="Dance GIF" />
            </div>
            <p>Enjoy the dance!</p> */}
        </div>
    );
};

export default Player;
