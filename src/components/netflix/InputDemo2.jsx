import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [hobbies, sethobbies] = useState([])
    //const [hobbies, sethobbies] = useState("chess")

    const hobbiesHandler = (event)=>{
        console.log(event.target.value) //chess
        //event -->single hooby --> string
        //chess -->string
        //setHobbies(chess)
        //sethobbies(event.target.value) //false
        //push..
        console.log("event..",event)
        var checked = event.target.checked; //true false
        if(checked){
            sethobbies([...hobbies,event.target.value])
        }
        else{
            //[chess,reading] -->reading uncheck
            //remove 
            //[hobbies].filter -->h=chess != reading -->true
            //[hobbies].filter -->h=reading != reading -->false
            const filterHobbies =hobbies.filter((h)=>{
                return h!=event.target.value
            })
            sethobbies(filterHobbies)
            //sethobbies(hobbies.filter((h)=>h!=event.target.value))
        }
        
    }   
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 2</h1>
        <div>
            <label>HOBBIES</label> <br></br>
            Chess :<input type='checkbox' name='hobbies' value="chess" onChange={(event)=>{hobbiesHandler(event)}}></input>
            Reading :<input type='checkbox' name='hobbies' value="reading" onChange={(event)=>{hobbiesHandler(event)}}></input>
            travel :<input type='checkbox' name='hobbies' value="travel" onChange={(event)=>{hobbiesHandler(event)}}></input>
        </div>
        <h1>My Hobbies Are</h1>
        {
            hobbies.map((h)=>{
                return <li>{h}</li>
            })
        }
    </div>
  )
}