import React from 'react'

export const UseStateDemo1 = () => {

  //function calling pract
  const test =(x)=>{
    alert("test called..."+x)
  }

  return (
    <div style={{textAlign:"center"}}>
            <h1>UseStateDemo1</h1>
        {/* <button onClick={test(100)}>TEST</button> */}
        <button onClick={test}>TEST</button>
        <button onClick={()=>{test(100)}}>TEST ()</button>
    </div>
  )
}