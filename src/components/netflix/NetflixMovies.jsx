import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
    const movieList = [
        {id:101,name:"Dhurandhar"},
        {id:102,name:"Dhurandhar 2"},
        {id:103,name:"Bahubali"},
        {id:104,name:"Pushpa"},
        
    ]
  return (
    <div  style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        {
            movieList.map((movie)=>{
                return <li>
                    <Link to={`/Watch/${movie.name}`}>{movie.name}</Link>
                </li>
            })
        }
    </div>
  )
}