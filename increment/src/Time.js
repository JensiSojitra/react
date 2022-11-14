import React, { useState } from "react";

const Time = () => {
    let time = new Date().toLocaleTimeString();

    const [Ctime, curTime] = useState(time);

     const updateTime = () => {
        time = new Date().toLocaleTimeString();
        curTime(time)
     };

     setInterval(updateTime,1000);

   return(
    <>
     <h1>{Ctime}</h1>
    </>
   )
}

export default Time;