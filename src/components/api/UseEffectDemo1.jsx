import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("use effect")
    },[count]) 
    //count -->change -->useEffect will call again..
    //()=>{} -->call back func
    //[] -->dep array..

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseEffectDemo1</h1>
        {count}
        <button onClick={()=>{setcount(count+1)}} >COUNT</button>

    </div>
  )
}