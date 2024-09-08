import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutButton = () =>{
        authService.logout().then(() =>{
            dispatch(logout());     
        })
    }

  return (
    <div>
      <button onClick={logoutButton}
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-1000 rounded-full'>
        Logout
      </button>
      </div>
  )
}

export default LogoutBtn
