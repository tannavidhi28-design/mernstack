import axios from 'axios';
import React from 'react'

export const ApiDemo2 = () => {
    const adduser = async() =>
    {
      const userObj={
      name: "amit",
      age: 23,
      email: "vidhii@gmail.com",
      password: "vidhi123",
      isActive: true,
     };

     const res = await axios.post("https://node5.onrender.com/user/user/",userObj);
     console.log(res) //axios nu object mlse
     console.log(res.data) //api no responce mlse
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        <button onClick={adduser}></button>
        </div>
  )
}
