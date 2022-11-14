import React from 'react'; 
import Card from './Card';
import array from './Array';


const App = () => (
  <React.StrictMode>
  <h1>Top 3 MX Player web series</h1>
  {array.map((val)=>{
    return(
      <Card 
      key = {val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
       />
    )
    })
  }
  </React.StrictMode>
);

export default App;
