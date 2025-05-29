import React from 'react'
import { useState } from 'react'

export default function FormExample() {

    let [name, setName]=useState('');
    let [email, setEmail]=useState('');
    
    let handleinput=()=>{
        alert("welcome "+name + " Your Email Id is "+email);
    }
  return (
    <div>
      <form onSubmit={handleinput}> 
        
        Enter name:<input type="text" onChange={(event)=>{setName(event.target.value)}}></input><br></br>
          Enter Email:<input type='text' onChange={(event)=>{setEmail(event.target.value)}}></input><br></br>
        <input type='submit' value= "register"></input>
      
      </form>
    </div>
  )
}
