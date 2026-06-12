import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

           <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/netflixshows">
                Netflix Shows
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">
                Netflix Movies
              </Link>
            </li>

              {/*<li class="nav-item active">
              <Link class="nav-link" to="/iplteams">
                IPL Teams
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/sports">
                Sports Teams
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/students">
                Student Result
              </Link>
            </li> 
             <li class="nav-item active">
              <Link class="nav-link" to="/useState1">
                UseState1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/useState2">
                UseState2
               </Link>
            </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/useState3">
                UseState3
               </Link>
            </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/useState4">
                UseState4
               </Link>
               </li>
                <li class="nav-item active">
              <Link class="nav-link" to="/useState5">
                UseState5
               </Link>
            </li>*/}
                <li class="nav-item active">
              <Link class="nav-link" to="/employees">
                Employees
               </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo1">
                InputDemo 1
               </Link>
            </li>
                <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo2">
                InputDemo 2
               </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/students1">
                Students 1
               </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/table">
                TableDemo 1
               </Link>
            </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/table2">
                TableDemo 2
               </Link>
            </li>

              <li class="nav-item active">
              <Link class="nav-link" to="/book">
                Book
               </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">
                FormDemo1
               </Link>
            </li>

            
             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">
                FormDemo2
               </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">
                FormDemo3
               </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">
                FormDemo4
               </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo5">
                FormDemo5
               </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo6">
                FormDemo6
               </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo7">
                FormDemo7
               </Link>
            </li>
             
              <li class="nav-item active">
              <Link class="nav-link" to="/formdemo8">
                FormDemo8
               </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};