import React , {useState} from 'react'
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = () => {
    const [liked, setliked] = useState(false)

    const handleClickLike =()=>{
        setliked(!liked)
    }
  return (
    <div>
        <IconButton onClick={handleClickLike} color={liked? 'error': 'default'}>
            <FavoriteIcon/>
        </IconButton>
    </div>
  )
}

export default LikeButton
