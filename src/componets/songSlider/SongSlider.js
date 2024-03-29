import React from "react";
import { useParams } from "react-router-dom";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import songsData from "../../songs.json";
import "./SongSlider.css";
import AlbumList from "../Album/AlbumList";

const SongSlider = () => {
  const { id } = useParams();
  const { playlists } = songsData;
  const songs = playlists.find((playlist) => playlist.id === id)?.songs || [];
  const [currentSong, setCurrentSong] = React.useState(0);

  console.log(songs);

  const onChangeMusic =(musicIndex)=>{
    setCurrentSong(musicIndex)
    
    console.log(musicIndex);
  }

  const nextSong = () => {
    setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          margin: "20px",
          // marginRight:'40px'
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
        <h1 style={{color:'red', fontSize:'36px'}}>{songs[currentSong].title}</h1>
        <h2 style={{color:'red', fontSize:'36px'}}>{songs[currentSong].artist}</h2>
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

      {/* <div style={{ color: "white", fontSize: "50px" }}>آلبوم </div> */}
      <div style={{ color: "red", fontSize: "20px", marginTop: "20px" }}>
        <h4 style={{ color: "red", fontSize: "24px" , display:'flex', flexDirection : 'column' , alignItems:'flex-end' }}> : آهنگ های در حال پخش</h4>
        <ul>
          {songs.map((playlist, index) => (
            <AlbumList
              key={index}
              songId={playlist.id}
              title={playlist.title}
              image={playlist.image}
              url={playlist.url}
              // image={[{src , id}].find(item=>item.id===playlist.image).src}
              artist={playlist.artist}
              onClick={()=>onChangeMusic(index)}
              isActive={index===currentSong}
            />
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
