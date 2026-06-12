import React, { useState } from 'react'

export const UseStateDemo5 = () => {

    //variable name
    const [users,setUsers] = useState(["ram","shyam","krishna"])
    //setter function
    //[] --> initial data
    const addName = ()=>{
        const alph ="abcdefghijklmnopqrstuvwxyz"
        var size = 4; //name ni size api che 
        var name =""
        for(let i=0;i<size;i++){
            var randomIndex = Math.floor(Math.random()*alph.length)
            //console.log(randomIndex)----> number generate karse
            //console.log(alph[randomIndex])
            name = name + alph[randomIndex]
        }
         
        //setUsers(["ram","shyam","krishna"])
        // var updatedUser = [...users,"abcd"]
        // setUsers(updatedUser)

        //setUsers([...users,"abcd"])
        setUsers([...users,name])
        //...(spread operator) juno array akhu copy karse and navu object laine navo array banavse 
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo5</h1>
        {
            users.map((user)=>{
                return <li>{user}</li>
            })
        }
        <button onClick={addName}>ADD</button>
    </div>
  )
}