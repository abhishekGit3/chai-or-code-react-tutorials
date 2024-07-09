import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(10)

  const addValue = ()=>{
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () =>{
      setCounter(counter = counter -1)
  }
  
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2> 
      <br />

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
