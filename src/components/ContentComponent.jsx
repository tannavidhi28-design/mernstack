import React from 'react'

export const ContentComponent = () => {
    const name = "India"
    const age = 5000
    const isSecular = true
  return (
    <div style={{border:"1px solid black",minHeight:"300px",width:"100%",textAlign:"center"}}>
        <h1>Name = {name}</h1>
        <h3>Age = {age}</h3>
        <h3>Secular {isSecular == true ? "Yes":"No"}</h3>
    </div>
  )
}