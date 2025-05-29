import React from 'react'
import { useState } from 'react'
import { useFormState } from 'react-dom'
export default function ConditionalRendering() {
  let [isLoggedin, setisLoggedin] = useState(true);
  return (
    <div>
      <br />
      {

        isLoggedin ? <h1>Already Loging</h1> : <h1>Please, loging to our website</h1>
      }
      <button onClick={() => { setisLoggedin(!isLoggedin) }}>update login Status</button>
    </div>
  )
}