import React from 'react'
import { House1 } from './House1'
import { WaterContext } from './WaterContext'

export const WaterFlow = () => {
    var flow = "water"
    var data = {
      society:"abcd",
      area:"mmm"
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>WaterFlow</h1>
        <WaterContext.Provider value={{flow,data}}>
            <House1></House1>
        </WaterContext.Provider>
    </div>
  )
}