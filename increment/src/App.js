import React, { useState } from "react";

const App = () =>{
  //let count = 1;
  //const state = useState();
  //console.log(state);

  const [count, setCount] = useState(0); 

  const IncNum = () => {
      setCount(count + 1);
  };

  return(
    <>
    <h1> {count} </h1>  
    <button onClick={IncNum}>Click</button>
    </>
  );
};

export default App;
