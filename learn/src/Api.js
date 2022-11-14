import React, { useEffect, useState } from 'react'

export default function Api() {
    const [data,setdata] =  useState([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(y=>y.json())
        .then(y=> {
           setdata(y)  
        })
           },[])
  return (
    <div>
        <table>
        {
        data.map((element)=> {
              return( <tr><td>{element.userId}</td><td>{element.id}</td><td>{element.title}</td></tr>)
        }) 
        }
        </table>
    </div>
  )
}
