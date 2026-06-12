import React from 'react'
import { Link } from 'react-router-dom';

export const Sports = () => {
    const sports = [
    { id: 1, name: "Cricket" },
    { id: 2, name: "Football" },
    { id: 3, name: "Basketball" },
    { id: 4, name: "Tennis" },
    { id: 5, name: "Hockey" },
    { id: 6, name: "Badminton" }
];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Sports</h1>
        {
            sports.map((sport) => {
                return(
                    <li key={sport.id}>
                        <Link to={`/sport/${sport.id}`}>
                        {sport.name}
                        </Link>
                    </li>
                )
            })
        }
        </div>
  )
}
