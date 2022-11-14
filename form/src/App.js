import React,{useState} from 'react';
import './App.css';

const App =()=> {
  const [fullName, setfullName] = useState({
    fname:'',
    lname:'',
    
  });
  
  const inputEvent =(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setfullName((prevValue)=>{
      //console.log(prevValue)
      if (name === 'fname'){
      return{  
        fname:value,
        lname:prevValue.lname,
       }
      }else if (name === 'lname'){
        return{  
          fname: prevValue.fname,
          lname: value,
         }
        }
     });
  };

  const onSubmit = (event)=>{
    event.preventDefault();
    alert('Form submited');
  }

  
  return (
    <>
    <div>
      <form onClick={onSubmit}>
    <h1>Hello {fullName.fname} </h1> 
    <input 
    type='text' 
    placeholder='Enter name' 
    onChange={inputEvent}
    name='fname'
    value={fullName.fname}
     />
     <br /><br />
     <input 
    type='text' 
    placeholder='Enter last name' 
    onChange={inputEvent}
    name='lname'
    value={fullName.lname}
     />
    <button type='submit'> Submit 👍</button>
    </form>
    </div>
    </>
  );
}

export default App;
