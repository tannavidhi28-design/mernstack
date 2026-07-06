import React from 'react'
import { EaerPhone } from './EaerPhone'

export const Charger = (props) => {
    console.log("charger props..",props)
  return (
    <div>
        <h1>CHARGER</h1>
        <EaerPhone model = {props.model}></EaerPhone>
    </div>
  )
}