import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const name = "Jensi Sojitra";
const img = "https://picsum.photos/202/300";
const img2 = "https://picsum.photos/203/300";
const img3 = "https://picsum.photos/204/300";

const heading = {
  textAlign: 'center',
  color: "coral",
  margin: "50px 0px",
  fontWeight: "bold",
  textShadow: "0px 2px 4px lightcoral",
}

ReactDOM.render(
  <>
  <h1 className='name' style={heading}>My name is {name}</h1>
  <div className='image'>
  <img src={img} alt='img1' />
  <img src={img2} alt='img2' />
  <a href='https://www.w3schools.com/'>
    <img src={img3} alt='img3' />
  </a>
  </div>
  </>,document.getElementById('root')
);