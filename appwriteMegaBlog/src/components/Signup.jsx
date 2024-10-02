import React , {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {Input , Button ,  Logo} from './index'
import { useNavigate , Link } from 'react-router-dom'
import authSlice, { login } from '../store/authSlice'
import authService from '../appwrite/auth'
import { register , handleSubmit} from 'react-hook-form'

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error , setError] = useState();
  const {register , handleSubmit} = useForm();

 const create = async(data)=>{
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if(userData){
        const userData = authService.getCurrentUser();
        dispatch(authSlice.login(userData));
      }

    } catch (error) {
      setError(error.message);
    }
 }
  return (
    <div>
      
    </div>
  )
}

export default Signup
