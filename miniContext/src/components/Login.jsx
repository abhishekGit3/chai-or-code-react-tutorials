import React from 'react'
import { useState , useContext } from 'react'
import userContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(userContext)

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUser({username , password})
    }

  return (
    <div>
      <h2>Login</h2>

      <input type='text' placeholder='enter your user name'
        value={username} onChange={(event) => 
        setUsername(event.target.value)}/>

      <input type='password' placeholder='enter your password'
        value={password} onChange={(event) =>
        setPassword(event.target.value)}/>

      <button type='submit' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login;
