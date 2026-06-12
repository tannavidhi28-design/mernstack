import React from 'react'

export const MapDemo2 = () => {
     var users = [
        {id:1,name:"amit",age:23},
        {id:2,name:"raj",age:24},
        {id:3,name:"jay",age:21}
    ]

  return (
   <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} {user.name} {user.age}</li>
            })
        }
    </div>
  )
}
