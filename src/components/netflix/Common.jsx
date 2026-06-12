import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Common = () => {
    const state = useLocation().state
    console.log(state)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Common</h1>
        <Link to={state.from}>BACK</Link>
    </div>
  )
}