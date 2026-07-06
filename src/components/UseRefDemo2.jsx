import React, { useEffect, useRef } from 'react'

export const UseRefDemo2 = () => {
    const divref = useRef()
    useEffect(()=>{
        divref.current.scrollIntoView({
            behavior:"smooth"
        })
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo2</h1>
        <div style={{background:"orange",height:"800px"}}></div>
        <div style={{background:"white",height:"800px"}}></div>
        <div ref={divref} style={{background:"green",height:"800px"}}></div>
    </div>
  )
}
