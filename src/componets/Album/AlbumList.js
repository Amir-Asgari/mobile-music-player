import React , {useState , useEffect} from "react";
import LikeButton from "../MUI/LikeButton/LikeButton";
import "./AlbumList.css";
// import { saveAs } from "file-saver";



const AlbumList = ({
  image,
  title,
  artist,
  onClick,
  isActive,
  songId,
  url,
}) => {
  // const isDownloaded = localStorage.getItem(title);
  const [isDownloaded, setIsDownloaded] = useState(()=>{
    return localStorage.getItem(songId)==='false'
  })

  const downloadSong = (url , title) => {
    // const song = url;
    // const downloadUrl = `/musics/${encodeURIComponent(song.title)}.mp3`;
    // saveAs(downloadUrl, song.title);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.setAttribute("download", "");
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setIsDownloaded(true)
      localStorage.setItem(songId, isDownloaded)
  };

  useEffect(() => {
    const path = `C:\Users\mraas\Downloads${encodeURIComponent(title)}.mp3`;
    fetch(path)
      .then((response) => {
        if (response.ok) {
          console.log("آهنگ قبلا دانلود شده  ");
          setIsDownloaded(true)
        } else {
          console.log("آهنگ قبلا دانلود نشده  ");
          setIsDownloaded(false)
        }
      })
      .catch((error) => {
        console.log("خطا در برقراری ارتباط با مسیر دانلود ", error);
      });
  }, [title]);

  return (
    <li className={`li ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="container">
        <div className="imageStyle">
          <img src={image} alt="image" />
        </div>
        <div className="nameStyle">
          <h4 style={{ color: "red", fontSize: "26px" }}>{title}</h4>
          <h4 style={{ color: "red", fontSize: "26px" }}>{artist}</h4>
        </div>
      </div>
      <div className="likeButton">
        <LikeButton songId={songId} />
        {!isDownloaded ? (
          <button onClick={() => downloadSong(url , title)}>دانلود</button>
        ) : (
          <button disabled >دانلود شده </button>
        )}
      </div>
    </li>
  );
};

export default AlbumList;
