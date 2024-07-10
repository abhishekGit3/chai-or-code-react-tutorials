import './App.css'
import Card from './components/card'  
function App() {

//let arr = [1,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind css</h1>
      <Card username = 'someone' btnText = 'click me' />
      <Card username='abhi'/*newArr = {arr}*//>

    </>
  )
}

export default App
