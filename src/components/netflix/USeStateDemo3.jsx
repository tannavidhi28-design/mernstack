import React, { useState } from 'react'

export const UseStateDemo3 = () => {


    const[isLoading,setIsLoading]=useState(true)
    const stopLoader = ()=>{
        
        setIsLoading(false)   
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {
         isLoading == true &&    <h1>Loading.....</h1>
        }

        <button onClick={stopLoader}>STOP</button>
        
    </div>
  )
}