import React from 'react'
import {useParams } from "react-router-dom";

export const SportsDetails = () => {
const sportlist = [
  {id:1,name:"Cricket",players:"11",teams:2,origin:"England",knownplayer:[
    {id:1,name:"Sachin Tendulkar"},
    {id:2,name:"Virat Kohli"}]},

  {id:2,name:"Football",players:"11",teams:2,origin:"England",knownplayer:[
    {id:1,name:"Lionel Messi"},
    {id:2,name:"Cristiano Ronaldo"}]},

  {id:3,name:"Basketball",players:"5",teams:2,origin:"USA",knownplayer:[
    {id:1,name:"LeBron James"},
    {id:2,name:"Michael Jordan"}]},

  {id:4,name:"Tennis",players:"1 or 2",teams:2,origin:"France",knownplayer:[
    {id:1,name:"Roger Federer"},
    {id:2,name:"Rafael Nadal"}]},

  {id:5,name:"Hockey",players:"11",teams:2,origin:"England",knownplayer:[
    {id:1,name:"Dhyan Chand"}]},

  {id:6,name:"Badminton",players:"1 or 2",teams:2,origin:"India",knownplayer:[
    {id:1,name:"PV Sindhu"},
    {id:2,name:"Saina Nehwal"}]}
];

  const id = useParams().id;

  const foundsports = sportlist.find((t) => t.id == id);
  return (
    <div style={{textAlign:"center"}}>
        <h1>SportsDetails:  {id}</h1>
        <h2>Name: {foundsports.name}</h2>
        <h2>Players: {foundsports.players}</h2>
        <h2>Teams: {foundsports.teams}</h2>
        <h2>Origin: {foundsports.origin}</h2>
        <h2>Known Players:</h2>
      {
        foundsports.knownplayer.map((player) => (
          <div>
            <h3>{player.id}</h3> 
            <h3> {player.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
