import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./SongSlider.css";
import AlbumList from "../Album/AlbumList";

const SongSlider = ({ selectedAlbum }) => {
  const { id } = useParams();
  const [songs, setSongs] = React.useState([]);
  const [currentSong, setCurrentSong] = React.useState(0);

  useEffect(() => {
    const album = selectedAlbum.playlists.find((playlist) => playlist.id === id);
    if (album) {
      setSongs(album.songs);
    }
  }, [selectedAlbum, id]);

  const nextSong = () => {
    setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
  };

  if (!songs.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "45%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
            src={songs[currentSong].image}
            alt={songs[currentSong].artist}
          />
        </div>
        <h1>{songs[currentSong].title}</h1>
        <h2>{songs[currentSong].artist}</h2>
      </div>
      <H5AudioPlayer
        autoPlay
        src={songs[currentSong].url}
        onEnded={nextSong}
        showSkipControls={true}
        onClickPrevious={prevSong}
        onClickNext={nextSong}
      />

      <div style={{ color: "white", fontSize: "20px", marginTop: "20px" }}>
        <ul>
          {songs.map((playlist, index) => (
            <AlbumList
              key={index}
              title={playlist.title}
              image={playlist.image}
              artist={playlist.artist}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongSlider;
