//import logo from './logo.svg';
import './App.css';
import SlotM from './Slot'

function App() {
  return (
    <>
    <h1 className='heading'>
       Welcome to <span style={{fontWeight:"bold"}}>slot machiene Game</span> 
    </h1>

    <div className='slot'>
    <SlotM x='😍' y='😍' z='😍' />
    <SlotM x='❤' y='😒' z='💕' />
    <SlotM x='💕' y='😁' z='😜' />
    </div>
    </>
  );
}

export default App;
