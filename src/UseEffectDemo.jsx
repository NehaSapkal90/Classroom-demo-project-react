import React, { useState } from 'react'
import { useEffect } from 'react'

export default function UseEffectDemo() {
    let [age, setAge]=useState(0);
    let [data, setData]=useState(100);
    useEffect(()=>{
        console.log("This is example of useEffect() method now component is in ")
        console.log("updated value of age is "+age);

        if(age<=10){
            setAge(age+1);
        }
    }, [age])//Only update the value of age parameter then call the useEffect() method , not a updata value of data update
  return (
    <div>
        UseEffectDemo
        <h1>This is example of UseEffect() hook</h1>
        <h2>Age is {age}</h2>
        <h2>data is {data}</h2>
        <button onClick={()=>{setAge(age+1)}}>update age</button>
       <button onClick={()=>{setData(data-5)}}>Decrease data</button>
    </div>
  )
}
