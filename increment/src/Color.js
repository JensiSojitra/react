import React, { useState } from "react";

const Color = () => {
    const purple = '#8e44ad';
    const [bg,setBg] = useState(purple);
    const [name, setName] = useState("Click me");


    const bgChange = () => {
        let newBg = '#34495e';
        setBg(newBg);
        setName('yes!! 😍');
    }

    const bgBack = ()=>{
        setBg(purple);
        setName('Wahh!!! 😜')
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
        <button onClick={bgChange}  onDoubleClick={bgBack}> 
        {name} </button>
        </div>
        </>
    )
}

export default Color;