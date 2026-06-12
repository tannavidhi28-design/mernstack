import React from 'react'

export const MapDemo1 = () => {
    var a = [10,20,30,40]
  return (
    <div style= {{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            a.map((m)=>{
                return<li>{m}</li>
            })
        }
    </div>
  )
}
