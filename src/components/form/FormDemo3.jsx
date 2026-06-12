import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("error",errors)
    const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log("data",data)
    }

    const validationSchema ={
        emailValidator:{
            required:{
                value:true,
                message:"email is required"
            },
            minLength:{
                value:6,
                message:"min len is 6"
            },
            maxLength:{
                value:30,
                message:"max len is 30"
            }

        },
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                    {errors.name && errors.name.message}
            </div>
            <div>
                <label>Email</label>
                <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                {/* {errors.email && errors.email.message} */}
                {errors.email?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}