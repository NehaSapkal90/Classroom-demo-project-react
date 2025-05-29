import React from 'react'
import { useEffect } from 'react'
export default function UseEffectUnmount() {
    useEffect(()=>{
        
            console.log("Component is in mount stage");
            return ()=>{
                console.log("componenet is in unmout stage");
            
        }
    })
  return (
    <div>
      <h1>This is Example of unmount stage</h1>
    </div>
  )
}
