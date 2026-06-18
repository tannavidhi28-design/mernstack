import axios from 'axios';
import React, { useState } from 'react'
import { useFormState } from 'react-dom';
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const Id=useParams().imdbID;
    const [display, setdisplay] = useState("")
    const moviedeatils=async()=>
    {
        const res=await axios.get(`http://www.omdbapi.com/?apikey=3df9f68b&i=${Id}`)
        console.log("id",res.data)
        setdisplay(res.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>MovieDetails</h1>
        <button onClick={moviedeatils}>details</button>
        <h1>Actors:{display.Actors}</h1>
        <h1>Awards:{display.Awards}</h1>
        <h1>Language:{display.Language}</h1>
        <h1>Title:{display.Title}</h1>
        <h1>Year:{display.Year}</h1>
    </div>
  )
}