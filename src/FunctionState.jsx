import React from "react";
import { useState } from "react";
function FunctionState(){
   
        
            let [name, setName]= useState("Meena");
            let [age, setAge]= useState(20);
            let [counter, SetCounter]=useState(0);
            let updatename=()=>{
                setName("Raj");
                
            }
            let updateCounter=()=>{
                SetCounter(counter+1);
            }
           
            
            return(
                <div>
                    <h1>name is {name}</h1>
                    <h2>Age is {age}</h2>
                

                    <button onClick={updatename}>update name</button>
                    <button onClick={()=>{setAge(34)}}>update age</button>
                    <h1>counter is {counter}</h1>
                    <button onClick={()=>{SetCounter(counter+1)}}>update counter</button>
                </div>
            )
            
            

      
  
}
export default FunctionState;