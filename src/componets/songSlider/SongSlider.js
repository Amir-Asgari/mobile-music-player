import React from "react";
import { useParams } from "react-router-dom";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import songsData from "../../songs.json";
import "./SongSlider.css";

const SongSlider = () => {
  const { id } = useParams();
  const { playlists } = songsData;
  const songs = playlists.find((playlist) => playlist.id === id)?.songs || [];
  const [currentSong, setCurrentSong] = React.useState(0);

  console.log(songs);

  const nextSong = () => {
    setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
  };

  console.log({ songs });
  return (
    <div>
      <h2>{songs[currentSong].title}</h2>
      <h3>{songs[currentSong].artist}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "center",
            borderRadius: "50%",
          }}
          src={songs[currentSong].image}
          alt={songs[currentSong].artist}
        />
      </div>
      <H5AudioPlayer
        autoPlay
        src={songs[currentSong].url}
        onEnded={nextSong}
        showSkipControls={true}
        onClickPrevious={prevSong}
        onClickNext={nextSong}
        // showJumpControls={true}
      />

      <div style={{ color: "white", fontSize: "50px" }}>آلبوم </div>
      <div style={{ color: "white", fontSize: "20px", marginTop: "20px" }}>
        <h4>آلبوم‌های در حال پخش:</h4>
        <ul>
          {songs.map((playlist, index) => (
            <div  key={index}>
            <li>{playlist.title}</li>
            <li ><img  src={playlist.image}/></li>
            </div>
          ))}
        </ul>
      </div>

      <div style={{ color: "white", fontSize: "50px", marginTop: "20px" }}>
        آلبوم {currentSong}
      </div>
    </div>
  );
};

export default SongSlider;
