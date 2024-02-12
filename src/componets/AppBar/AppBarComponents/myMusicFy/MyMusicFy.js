import React from 'react'
import tamir from '../../../../assets/tamir.jpg'

const MyMusicFy = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      color:'red',
      zIndex:'1000',
      fontSize:'46px',
      flexDirection:'column'
    }}>
      {/* <h4>
        این بخش در حال بروزرسانی می باشد 
      </h4> */}
      <img src={tamir} alt='سایت در حال تعمیر می باشد ' />
      <div>
        <p>بخش موزیکفای من هنوز راه اندازی نشده</p>
      </div>
    </div>
  )
}

export default MyMusicFy
