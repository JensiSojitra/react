import React from 'react';
//import ReactDom from 'react-dom';

function Card(props){
    return(
     <div className='cards'>
        <div className='Card'>
            <img src={props.imgsrc} alt='daydreamer' className='card_img' />
            <div className='card_info'>
                <span className='cardcat'>{props.title}</span>
                <h3 className='card_title'>{props.sname}</h3>
                <a href={props.link} target='_abc'>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
     </div>
    );
}

export default Card;