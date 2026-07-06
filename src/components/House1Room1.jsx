import React, { useContext } from 'react'
import { WaterContext } from './WaterContext'

export const House1Room1 = () => {
  const {flow,data}=useContext(WaterContext)
  return (
    <div>
      <h3> house 1 room 1 {flow}</h3>
      <h4>Society = {data.society}</h4>
    </div>
  )
}