import React from 'react'
// import "../assets/css/natflix.css"

export const NatflixNavbar = () => {
  return (
    <nav className="navbar">

        <div className="nav-left">
            <div className="logo">NETFLIX</div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">New & Popular</a></li>
                <li><a href="#">My List</a></li>
            </ul>
        </div>

        <div className="nav-right">
        </div>

    </nav>
  )
}