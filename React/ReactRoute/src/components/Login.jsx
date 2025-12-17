import React, { useContext } from 'react'
import {useState} from 'react'
import UserContext from '../context/usercontext';


const Login=() => {
    const [username, setusername]=useState('');
    const [password, setpassword]=useState('');

    const {setUser} = useContext(UserContext)
    

     const handleSumit=(e)=>{
      e.preventDefault()
      setUser({username,password})
    }

  return (
    <div>
        <h2>login</h2>
        <input type='text' value={username} onChange={(e)=> setusername(e.target.value) } placeholder='username'/>
        <input type='text'value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSumit} >Sumit</button>
    </div>
  )
}

export default Login