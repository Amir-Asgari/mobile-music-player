import React from 'react'
import Player from '../../Player'

const AlbumPlayingList = ({ selectedAlbum }) => {
  return (
    <div>
      <Player selectedAlbum={selectedAlbum} />
    </div>
  )
}

export default AlbumPlayingList
