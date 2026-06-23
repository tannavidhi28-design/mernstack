import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {

   const {register,handleSubmit}= useForm()

   const submithandler= async(data)=>{

    const res = await axios.post("https://node5.onrender.com/user/login",data)
               
    localStorage.setItem("token",res.data.data)
   }
  return (
    <div style={{textAlign : "center"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>Email</label>
                <input type='email'{...register("email")}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text'{...register("password")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}