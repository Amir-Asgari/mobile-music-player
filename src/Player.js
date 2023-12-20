import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import songsData from './songs.json';

const Player = () => {
  const [currentSong, setCurrentSong] = useState(0);

  const playSong = () => {
    console.log("Song is playing");
  };

  const pauseSong = () => {
    console.log("Song is paused");
  };

  const nextSong = () => {
    setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
  };

  const { playlists } = songsData;
  const songs = playlists[0].songs;

  return (
    <div>
      <AudioPlayer
        autoPlay
        src={songs[currentSong].url}
        onPlay={playSong}
        onPause={pauseSong}
        // متد‌های دیگر مانند onEnded و ...
      />
      <h1>{songs[currentSong].title}</h1>
      <h2>{songs[currentSong].artist}</h2>
      <img src={songs[currentSong].image} alt={songs[currentSong].artist} />
      <button onClick={prevSong}>Previous</button>
      <button onClick={nextSong}>Next</button>
    </div>
  );
};

export default Player;
