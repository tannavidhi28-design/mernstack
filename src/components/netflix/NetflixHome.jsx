import React from 'react'

import { MyButton } from './MyButton'
import { Link } from 'react-router-dom'

export const NetflixHome = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixHome</h1>
             <MyButton funName={()=>{homeTest(10)}} name="home button"></MyButton>
              <Link to ="/common" state={{"from":"/netflixhome"}}>Common</Link>
    </div>
  )
}