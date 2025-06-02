import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  let navigate= useNavigate();
  let show=()=>{
    navigate("/about");
  }
  return (
    <div>
      <h1>This is home component</h1>
    
      <button onClick={show}> Visit to about us page</button>
    </div>
  )
}
