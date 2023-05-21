import './styled.css'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
  const[state,setState]=useState([])
  const handleClick=()=>{
    setState([...state,[]])
  }
  const undoClick=()=>{

  }
  const redoClick=()=>{

  }

  useEffect(() => {
    const handleClick = (e) => {
      setState({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleClick);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleClick
      );
    };
  }, []);

  return (
    <div onClick={handleClick} className='background'>
      <button onClick={undoClick}>undo</button>
      <button onClick={redoClick}>redo</button>
      {state.map((item,i)=>{
        <div key={i}  className='ball'>{item}</div>
      })}
      
    
    </div>
  )
}

export default App
