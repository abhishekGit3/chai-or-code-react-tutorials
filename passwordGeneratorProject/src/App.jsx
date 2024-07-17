import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllow , setNumberAllow] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [Password , setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsutuvwxyz'

    if(numberAllow) {str += "123456789"}
    if(charAllowed) {str += "~!@#$&*-_"}
  
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

  setPassword(pass);
    
  },[length,numberAllow,charAllowed,setPassword])



  useEffect(() =>{
      passwordGenerator()
  }, [length,numberAllow,charAllowed,passwordGenerator])
    
  return(
    <>
          <h1 className='text-white text-center'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-1 my-8 text-orange-500 bg-gray-500'>

        <div className='flex shaodow rounded-lg overflow-hidden mb-4'>

        <input type="text"  value={Password} className='rounded-md outline-none w-full py-1 px-3'
        placeholder='password' readOnly ref={passwordRef}/>

        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipBoard}>Copy</button>

        </div>

      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1">

          <input type="range" name ="range"className='cursor-pointer'
           min={6} max={100} value={length} onChange={(event) =>{
            setLength(event.target.value)}}/>

          <label>Length : {length}</label>

        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" id='numberAllow' defaultChecked = {numberAllow} onChange={() =>{
            setNumberAllow((prev) => 
              !prev
            )
          }}/>
          <label htmlFor="numberAllow">Numbers</label>

          <input type="checkbox" id='charAllowed' defaultChecked = {charAllowed} onChange={() =>{
            setCharAllowed((prev) => 
              !prev
            )
          }}/>
          <label htmlFor="charAllowed">Characters</label>
        </div>
     </div>
    
    </div>

  </>
  )


}
export default App
