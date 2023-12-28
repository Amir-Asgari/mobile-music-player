import React from "react";

const AdvertisingBox = () => {
  return (
    <div
      style={{
        // borderRadius: "10px",
        display: "flex",
        flexDirection:'column',
        // // width: "400px",
        margin:'10px 50px',
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <div
      style={{color:'white' , fontSize:'30px'}}
      >تبلیغات</div>
      <img style={{margin:'0 30px',borderRadius:'20px' , width:'700'}}
      alt="AdvertisingBox"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGlMBiyzWnF2a_Td0IuE-hGfjTzmC0VJwQA&usqp=CAU"
      />
    </div>
  );
};

export default AdvertisingBox;
