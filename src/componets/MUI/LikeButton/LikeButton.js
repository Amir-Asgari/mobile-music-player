import React , {useState} from 'react'
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from '@mui/material/colors';


const LikeButton = () => {
    const [liked, setliked] = useState(true)

    const handleClickLike =(prevLiked)=>{
        setliked(prevLiked=>!prevLiked)
    }
    // const redColor = red[50]
  return (
    <div >
        <IconButton  onClick={handleClickLike} color={!liked? 'error': '#000'}>
            <FavoriteIcon style={{height:'50px', width:'50px'}}/>
        </IconButton>
    </div>
  )
}

export default LikeButton
