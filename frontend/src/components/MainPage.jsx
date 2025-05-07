import axios from 'axios';
import React, { useEffect,useState } from 'react'
import SearchBar from './SearchBar';

function MainPage() {
  const token=localStorage.getItem('token')
  const [authorized, setAuthorized] = useState(false);
  useEffect(()=>{
    
    axios.get('http://localhost:3000/main',{
      headers:{
        authorizarion:token
      },
    }).then(()=>setAuthorized(true))
    .catch((err)=>{
      setAuthorized(false);
    })
  },[])
  
  // if(!authorized){
  //   return (
  //     <div>NOT AUTHROIZED</div>
  //   )
  // }
  return(
    <div className='h-screen z-10 bg-amber-200'>
      <div className='flex justify-center h-screen'>
<div className='flex items-center'>




<SearchBar/>
</div>

      </div>
      


    </div>
  )
 
}

export default MainPage