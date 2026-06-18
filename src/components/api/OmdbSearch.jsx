import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const OmdbSearch = () => {

    const [movieList, setmovieList] = useState([]);
    const [movieName, setmovieName] = useState("");

    const searchMovie = async () => {

        const res = await axios.get(
            `https://www.omdbapi.com/?apikey=f3325309&s=${movieName}`
        );

        console.log(res.data);
        setmovieList(res.data.Search);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>OmdbSearch</h1>

            <input
                type='text'
                onChange={(e) => setmovieName(e.target.value)}
            />

            <button onClick={searchMovie}>
                Search Movie
            </button>

            <div className='row'>
                {
                    movieList?.map((movie) => {
                        return (
                            <div key={movie.imdbID}>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    height="200px"
                                />

                                <h5>{movie.Title}</h5>
                                <h5>{movie.Year}</h5>

                                <Link to={`/moviedetails/${movie.imdbID}`}>
                                    Details
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}