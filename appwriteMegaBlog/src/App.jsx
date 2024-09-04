
import { useDispatch } from 'react-redux';
import { useState , useEffect } from 'react'
import authService from './appwrite/auth'
import { Header , Footer } from './components';
import { login , logout } from './store/authSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();

  const [loading , setloading] = useState(true);
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) =>{

      if(userData){
        dispatch(login({userData}))
      }
       else{
        dispatch(logout())
      }
    }).finally(() =>{setloading(false)})
    
  },[])

  return !loading ? (
    <div className='min-h-screen- flex flex-wrap 
    content- bg-grey-400'>
      APPWRITE TEST
      <div className="w-full-block">
        <Header/>
        <main>
            {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div >
  ) : null
}

export default App
