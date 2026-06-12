import React from "react";
import {useParams } from "react-router-dom";

export const TeamPlayers = () => {

  const teamlist = [
    { id: 1, name: "MI", captain: "Hardik Pandya", homeground: "Wankhede Stadium", trophies: 5 },
    { id: 2, name: "CSK", captain: "Ruturaj Gaikwad", homeground: "MA Chidambaram Stadium", trophies: 5},
    { id: 3,name:"RCB", captain:"Rajat Patidar", homeground:"M. Chinnaswamy Stadium", trophies:0 },
    { id: 4,name: "KKR", captain: "Shreyas Iyer", homground: "Eden Gardens", trophies: 3 },
    { id: 5, name: "GT", captain: "Shubman Gill", homground: "Narendra Modi Stadium", trophies: 1 },
    { id: 6, name:"RR", captain:"Sanju Samson", homeground:"Sawai Mansingh Stadium", trophies:1 }
  ];

  const id = useParams().id;

  const foundTeam = teamlist.find((t) => t.id == id);

  return (
    <div style={{ textAlign: "center" }}>
    <h1>TeamDetails {id}</h1>
    <h2>Name: {foundTeam.name}</h2>
    <h2>Captain: {foundTeam.captain}</h2>
    <h2>Homeground: {foundTeam.homeground}</h2>
    <h2>Trophies: {foundTeam.trophies}</h2>
    </div>
  );
};