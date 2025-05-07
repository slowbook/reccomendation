import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [token, setToken] = useState('');
    const navigate=useNavigate();
    const loginFunction= async (email,pass)=>{
        try {
            const res = await axios.post('http://localhost:3000/auth/login', {
              email: email,
              password: pass,
            });
            const recievedToken=res.data.token
            setToken(recievedToken)
            localStorage.setItem('token',recievedToken);
            navigate('/main')
          } catch (err) {
            console.error('Login failed:', err);
          }
        };
      

  return (
    <div>
        
        <div className='flex justify-around my-2'>

        <input onChange={(e)=>{
            setEmail(e.target.value);
        }}type="email" name="email" placeholder="Enter your email" required 
        className='border-red-600 border'/>
         <input onChange={(e)=>{
            setPass(e.target.value);
        }}type="password" name="password" placeholder="Enter your password" required 
        className='border-red-600 border'/>
        </div>
        <div className='flex justify-center'>
        {<button onClick={()=>loginFunction(email,pass)}className='border-3 border-red-400 flex justify-center'>Login</button> }
        </div>
        

    </div>
  )
}
