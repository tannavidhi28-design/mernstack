import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {
    //fetch data from url
    //<Route path='/watch/:name' element = {<Watch/>}></Route>
    //<Route path='/watch/:id' element = {<Watch/>}></Route>
    //const name = useParams().id

    const name = useParams().name
  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching !! {name}</h1>
    </div>
  )
}