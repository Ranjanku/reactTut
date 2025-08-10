import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  // let counter = 3;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  const subValue = () => {
    if( counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Counter App</h1>
     <h2>COUNT : {counter}</h2>
     <button onClick={addValue}>Increment</button>
     <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
