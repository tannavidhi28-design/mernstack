import React from 'react'
import { Charger } from './Charger'

export const MobileParent = () => {
    var model = "iphone 15"
  return (
    <div style={{textAlign:"center"}}>
        <h1>MobileParent</h1>
        <Charger model = {model}></Charger>
    </div>
  )
}