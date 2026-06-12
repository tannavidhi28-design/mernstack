import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {

    const {register,handleSubmit,formState:{errors},trigger}=useForm()
    const [step,setstep] = useState(1)

    const submitHandler = (data)=>{
        console.log(data)
    }
    const validationSchema ={
        nameValidator:{
            required:{
                value:true,
                message:"name is required *"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required *"
            }
        },
        numberValidator:{
            required:{
                value:true,
                message:"number is required *"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required *"
            }
        },
        cityValidator:{
            required:{
                value:true,
                message:"city is required *"
            }
        }
    }

    const next = async()=>{
        const valid = step==1
        ? await trigger(["name","age"]): step==2
        ? await trigger("number"): await trigger("email")

        if(valid){
            setstep(step+1)
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo7</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                step==1 && (
                    <div>
                        <div>
                            <label>Name</label>
                            <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                            {errors.name?.message}
                        </div>

                        <div>
                            <label>Age</label>
                            <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                            {errors.age?.message}
                        </div>

                        <div>
                            <button type='button' onClick={next}>Next</button>
                        </div>
                    </div>
                )
            }

            {
                step==2 && (
                    <div>
                        <div>
                            <label>Number</label>
                            <input type='text' {...register("number",validationSchema.numberValidator)}></input>
                            {errors.number?.message}
                        </div>

                        <div>
                            <button type='button' onClick={()=>{setstep(step-1)}}>Back</button>
                            <button type='button' onClick={next}>Next</button>
                        </div>
                    </div>
                )
            }

            {
                step==3 && (
                    <div>
                        <div>
                            <label>Email</label>
                            <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                            {errors.email?.message}
                        </div>

                        <div>
                            <button type='button' onClick={()=>{setstep(step-1)}}>Back</button>
                            <button type='button' onClick={next}>Next</button>
                        </div>
                    </div>
                )
            }

            {
                step==4 && (
                    <div>
                        <div>
                            <label>City</label>
                            <input type='text' {...register("city",validationSchema.cityValidator)}></input>
                            {errors.city?.message}
                        </div>

                        <div>
                            <button type='button' onClick={()=>{setstep(step-1)}}>Back</button>
                            <input type='submit'></input>
                        </div>
                    </div>
                )
            }

        </form>
    </div>
  )
}