import React from 'react';
import { useState } from "react"

const Introduce=()=>{
    const[name,setName]=useState("")
return(
    
    <div>
     <input onChange={(e)=>{
     setName(e.target.value)
     }} type="text"></input>
     <p>Hello {name} !</p>
    </div>
)
}

export default Introduce