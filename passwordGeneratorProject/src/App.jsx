import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllow , setNumberAllow] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [Password , setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = ''
    
  },[length,numberAllow,charAllowed,setPassword])
    
 

  return(
    <>
    <h1 className='text-4xl text-center font-bold text-white'>Password Generator</h1>


  </>
  )

  
}
export default App
