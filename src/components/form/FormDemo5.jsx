import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    //watch
    const{register,handleSubmit,formState:{errors},watch}=useForm({mode:"onChange"})
    const submitHandler = (data)=>{
        console.log(data)
    }
    const password = watch("password") //ram

    const validationSchema = {
        passwordValidator:{
            required:{
                value:true,
                message:"password is required*"
            }
        },
        confirmPasswordValidator:{
            validate:(params)=>{
                //params =raj
                return password == params || "both password should match"
            }
        }
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Password</label>
                <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
                {errors.password?.message}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='text' {...register("confirmpassword",validationSchema.confirmPasswordValidator)}></input>
                {errors.confirmpassword?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}