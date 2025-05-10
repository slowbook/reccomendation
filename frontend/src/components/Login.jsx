import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const navigate=useNavigate();
    const loginFunction= async (email,pass)=>{
      try {
          const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
            email: email,
            password: pass,
          });
          console.log(res);
          const recievedToken=res.data.token
          if(!recievedToken){
            navigate("/signup") ;
            return ;
          }
          localStorage.setItem("token", `Bearer ${recievedToken}`);
          navigate('/main')
        } catch (err) {
          console.error('Login failed:', err);
        }
      };
      const loginGoogleFunction= async (email,pass)=>{
        try {
            window.location.href="http://localhost:3000/auth/google"
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
        <div className='flex justify-center cursor-pointer'>
          <button onClick={()=>loginFunction(email,pass)}className='border-3 border-red-400 cursor-pointer flex justify-center'>Login</button>
          <button onClick={()=>loginGoogleFunction(email,pass)}className='border-3 border-red-400 cursor-pointer flex justify-center'>Google</button>
        </div>
        

    </div>
  )
}
