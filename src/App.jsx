import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { HeaderComponent } from './components/HeaderComponent'
import {ContentComponent} from './components/ContentComponent'
import FooterComponent  from './components/FooterComponent'
import { VideoComponent } from './components/VideoComponent'
import PhotoComponent from './components/PhotoComponent'
import { NatflixNavbar } from './components/NatflixNavbar'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/netflix/NetflixHome'
import { NetflixShows } from './components/netflix/NetflixShows'
import { Error404 } from './components/Error404'
import { Watch } from './components/netflix/Watch'
import { Navbar } from './components/Navbar'
import { NetflixMovies } from './components/netflix/NetflixMovies'
import { IPLTeams } from './components/netflix/IPLTeams'
import { TeamPlayers } from './components/netflix/TeamPlayers'
import { Sports } from './components/netflix/Sports'
import { SportsDetails } from './components/netflix/SportsDetails'
import { Students } from './components/netflix/Students'
import { Studentresult } from './components/netflix/Studentresult'
import { UseStateDemo1 } from './components/netflix/UseStateDemo1'
import { UseStateDemo2 } from './components/netflix/UseStateDemo2'
import { UseStateDemo3 } from './components/netflix/USeStateDemo3'
import { UseStateDemo4 } from './components/netflix/UseStateDemp4'
import { UseStateDemo5 } from './components/netflix/UseStateDemo5'
import { Employees } from './components/netflix/Employees'
import { InputDemo2 } from './components/netflix/InputDemo2'
import { InputDemo1 } from './components/netflix/InputDemo1'
import { Students1 } from './components/netflix/Students1'
import { TableDemo1 } from './components/netflix/TableDemo1'
import { TableDemo2 } from './components/netflix/TableDemo2'
import { Books } from './components/netflix/Books'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo3 } from './components/form/FormDemo3'
import { FormDemo4 } from './components/form/FormDemo4'
import { FormDemo5 } from './components/form/FormDemo5'
import { FormDemo6 } from './components/form/FormDemo6'
import { FormDemo7 } from './components/form/FormDemo7'
import { Common } from './components/netflix/Common'
import { FormDemo8 } from './components/form/FormDemo8'
//import './App.css'

function App() {
 
  return (
   <div>
      {/* <h1>Hello!</h1>
      <h4>AT A TIME WE CAN RETURN ONLY 1 ELEMENT</h4>
      <h4>EVERY TAG MUST HAVE CLOSING TAG</h4>
      <h4>WHATEVER WRITTER INSIDE RETURN STATEMENT WILL DISPLAY THE BROWSER</h4>
      <h1>Name : {name}</h1>
      <h1>year : {year}</h1>
      <h2>Isactive ?? : {isActive == true ? "Active" : "Not Active"}</h2>
      <h2>Name = {user.name}</h2>
      <h2>age = {user.age}</h2>
      <h2>Name = {student.name}</h2>
      <h2>Age = {student.age}</h2>
      <h2>Regular ??  {student.regular == true ? "yes regular" : "not regular"}</h2> */}

      {/* <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent> */}
      {/* <VideoComponent></VideoComponent>
      <PhotoComponent></PhotoComponent> */}
      {/* <NatflixNavbar></NatflixNavbar> */}
      {/* <MapDemo1></MapDemo1> */}
      {/* <MapDemo2></MapDemo2> */}
      {/* <MapDemo3></MapDemo3> */}
      {/* <MapDemo4></MapDemo4> */}
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<MapDemo4/>}></Route>
          <Route path='/netflixhome' element={<NetflixHome/>}></Route>
          <Route path='/netflixshows' element={<NetflixShows/>}></Route>
          <Route path='/watch/:name' element = {<Watch/>}></Route>
          <Route path='/netflixmovies' element = {<NetflixMovies/>}></Route>
          <Route path="/iplteams" element={<IPLTeams/>}></Route>
          <Route path="/team/:id" element={<TeamPlayers/>}></Route>
          <Route path="/sports" element={<Sports/>}></Route>
          <Route path="/sport/:id" element={<SportsDetails/>}></Route>
          <Route path='/*' element= {<Error404/>}></Route>
          <Route path="/students" element={<Students/>}></Route>
          <Route path="/student/:id" element={<Studentresult/>}></Route>
          <Route path="/useState1" element={<UseStateDemo1/>}></Route>
          <Route path="/useState2" element={<UseStateDemo2/>}></Route>
          <Route path="/useState3" element={<UseStateDemo3/>}></Route>
          <Route path="/useState4" element={<UseStateDemo4/>}></Route>
          <Route path="/useState5" element={<UseStateDemo5/>}></Route>
          <Route path="/employees" element={<Employees/>}></Route>
          <Route path="/inputdemo1" element={<InputDemo1/>}></Route>
          <Route path="/inputdemo2" element={<InputDemo2/>}></Route>
          <Route path="/students1" element={<Students1/>}></Route>
          <Route path='/table' element={<TableDemo1/>}></Route>
          <Route path='/table2' element={<TableDemo2/>}></Route>
          <Route path='/book' element= {<Books/>}></Route>
          <Route path='/formdemo1' element={<FormDemo1/>}></Route>
          <Route path='/formdemo2' element={<FormDemo2/>}></Route>
          <Route path='/formdemo3' element = {<FormDemo3/>}></Route>
          <Route path='/formdemo4' element = {<FormDemo4/>}></Route>
          <Route path='/formdemo5' element = {<FormDemo5/>}></Route>
          <Route path='/formdemo6' element = {<FormDemo6/>}></Route>
          <Route path='/formdemo7' element = {<FormDemo7/>}></Route>
          <Route path='/formdemo8' element = {<FormDemo8/>}></Route>
          <Route path='/common' element = {<Common/>}></Route>
        </Routes>
    </div>
  )
}

export default App
