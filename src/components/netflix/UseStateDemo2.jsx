import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    //var count =0; //normal variable

    const[count,setCount]=useState(0)
    //count --> stateVariable
    //setCount -->function --> using this function we can make changes in count..
    //0 --> initial value
    const increseCount = ()=>{
        console.log("count = ",count)
        setCount(count+1)   
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        <h1>Count ={count}</h1>
        <button onClick={increseCount}>Increse(+)</button>
    </div>
  )
}