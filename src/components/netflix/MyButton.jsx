import React from 'react'

export const MyButton = (props) => {
  return (
    <button onClick={()=>{props.funName()}} style={{color:props.color || "white",backgroundColor:props.bgcolor || "blueviolet"}}>{props.name || "test"}</button>
  )
}