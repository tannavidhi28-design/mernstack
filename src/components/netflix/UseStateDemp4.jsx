import React, { useState } from 'react'

export const UseStateDemo4 = () => {
    const [user,setUser]=useState({id:1,name:"test"})
    const changeUser = ()=>{
        setUser({id:101,name:"TEST"})
    }
  
    return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo4</h1>
        <h1>Id = {user.id}</h1>
        <h2>Name = {user.name}</h2>
        <button onClick={()=>{changeUser()}}>CHANGE</button>
    </div>
  )
}