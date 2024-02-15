import React, { useState } from "react";
import songsData from "../../../../songs.json";
import AlbumList from "../../../Album/AlbumList";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1); 
  const [currentSong, setCurrentSong] = React.useState(0);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = searchSongs(term);
    setSearchResults(results);
    console.log(searchResults);
  };

  const searchSongs = (term) => {
    const { playlists } = songsData;
    let results = [];
    playlists.forEach((playlist) => {
      playlist.songs.forEach((song) => {
        const title = song.title.toLowerCase().trim()
        const artist = song.artist.toLowerCase().trim()
        const tags = song.tags ? song.tags.toLowerCase().trim() : ''
        if (
          title.includes(term.toLowerCase()) ||
          tags.includes(term.toLowerCase()) ||
          artist.includes(term.toLowerCase())
        ) {
          results.push(song);
        }
      });
    });
    return results;
  };

  // const nextSong = () => {
  //   setCurrentSong((prevSong) => (prevSong + 1) % results.length);
  // };

  // const prevSong = () => {
  //   setCurrentSong((prevSong) => (prevSong - 1 + results.length) % results.length);
  // };

  const playSong = (index) => {
    setCurrentSongIndex(index);
    // Play the song with index 'index'
    console.log("Playing song:", searchResults[index]);
  };

  return (
    <div>
      <input
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          height: "60px",
          fontSize: "34px",
          margin: "35px",
          direction: "rtl",
          padding: "10px",
          borderRadius: "20px",
        }}
        type="text"
        placeholder="جستجو..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((song, index) => (
          <li key={index} style={{ display: "block", textDecoration: "none" }}>
            {index === currentSongIndex && (
              <div
                style={{
                  display: "flex",
                  bottom: "150",
                  left:'0',
                  position: "fixed",
                  width: "100% ",
                }}
              >
                {/* <div
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
                      src={song.image}
                      alt={song.artist}
                    />
                  </div>
                  <div
                    style={{
                      color: "red",
                      backgroundColor: "gray",
                      borderRadius: "50px",
                    }}
                  >
                    <h1>{song.title}</h1>
                    <h2>{song.artist}</h2>
                  </div>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginRight: "0",
                    paddingLeft: "0",
                  }}
                > */}
                  <H5AudioPlayer
                    autoPlay
                    src={song.url}
                    showJumpControls={false}
                    layout="stacked"
                    // onEnded={nextSong}
                    showSkipControls={true}
                    // onClickPrevious={prevSong}
                    // onClickNext={nextSong}
                  />
                {/* </div> */}
              </div>
            )}
            {/* {index===currentSongIndex && (
              <div style={{display:'block', height:'500px',width :'100%' , position : 'relative'}}></div>
            )} */}
              <AlbumList
                title={song.title}
                image={song.image}
                artist={song.artist}
                onClick={() => playSong(index)}
                isActive={index === currentSongIndex}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
