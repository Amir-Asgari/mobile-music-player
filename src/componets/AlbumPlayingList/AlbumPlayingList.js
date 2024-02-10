import React from 'react'
// import Player from '../../Player'
import SongSlider from '../songSlider/SongSlider'

const AlbumPlayingList = ({ selectedAlbum }) => {
  return (
    <div>
      <SongSlider selectedAlbum={selectedAlbum} />
    </div>
  )
}

export default AlbumPlayingList
