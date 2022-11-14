import React from "react";
import ReactDOM  from "react-dom";

const style = {
    color : ''
  }

let time = new Date();
let today = time.getHours();
let greet = '';

function Greeting(){

if(today > 1 && today <=12){
  greet = 'Good Morning';
  style.color = 'green';
}
else if(today > 12 && today <=19)
{
  greet = 'Good Afternoon';
  style.color = 'orange';
}
else if(today => 20)
{
  greet='Good Night';
  style.color = 'blue';
}

return(
    ReactDOM.render(
        <>
         <div>
           <h1>Hello Sir,<span style={style}> {greet}</span></h1>
         </div>
        </>,document.getElementById("root")
      )
)
}

export default Greeting;