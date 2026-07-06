import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {
  const inputRef = useRef() //input 
  const focusInput = () => {
    inputRef.current.focus()
  }
  useEffect(()=>{
    focusInput()
  },[])
    return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo1</h1>
        <div>
            <label>Name</label>
            <input ref={inputRef} type='text'></input>
        
        </div>
    </div>
  )
}
