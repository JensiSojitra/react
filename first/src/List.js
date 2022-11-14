import React from "react";

const fname = "jensi";
const lname = "Sojitra";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

function List(){
    return(
        <>
        <h1>Hello I am {fname}{lname}</h1>
        <p>Today's date : {date}</p>
        <p>Current time : {time}</p>
        <img src="https://picsum.photos/200/300" alt="img"/>
        <ul>
            <li>Tea</li>
            <li>Coffee</li>
            <li>Hot Chocolate</li>
            <li>Clod coffee</li>
        </ul>
        </>
    );
}

export default List;