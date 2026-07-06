import React, { useContext } from 'react'

import { WaterContext } from './WaterContext'
import { House1Room1 } from './House1Room1'

export const House1 = () => {
    const {flow} = useContext(WaterContext)
  return (
    <div>
        <h1>House1 - {flow}</h1>
        <House1Room1></House1Room1>
    </div>
  )
}