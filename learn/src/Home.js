import React, { useState } from 'react'

export default function Home() {
    const [data, setdata] = useState(0);
    const Add = () =>{
       setdata(data+1);
    }
    const less = () =>{
        setdata(data-1);
        if(data === 0){
            setdata(data)
        }
    }
    const div = () =>{
        setdata(data/2);
    }
     const [name, setname] = useState(null)
    const input=(val)=>{
        console.log(name);
        setname(val.target.value);
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={Add}>Add</button>
        <button onClick={less}>Less</button>
        <button onClick={div}>Div</button>
        <br />
        <input 
        type="text" 
        id='name' 
        onChange={input} 
        value={name} 
        name='name' 
        />
        <h1>{name}</h1>
    </div>
  )
  }
