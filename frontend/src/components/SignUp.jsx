import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate=useNavigate();
    const [name,SetName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [token, setToken] = useState('');
    
    const signupFunction=async ()=>{
try{
  const res=await axios.post('http://localhost:3000/auth/signup',{
        name,
        email,
        password
      })
      const recievedToken=res.data.token
      setToken(recievedToken)
      localStorage.setItem('token',recievedToken);
      navigate('/main')
    
    }catch(err){
      console.error('Login failed:', err);
    }
  }

  
  return (
    <div>

    <div className="flex justify-around">
      <input type="text" className="border-2 border-amber-700" onChange={(e)=>{SetName(e.target.value)}}/>
      <input type="email" className="border-2 border-amber-700" onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="password" className="border-2 border-amber-700" onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div className="flex justify-center my-2"> 
<button className="border-2 border-red-500"  onClick={()=>{signupFunction(name,email,password)}}>Signup</button>

    </div>




    </div>
  )
}

export default SignUp