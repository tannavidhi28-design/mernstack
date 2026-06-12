import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
  const{register,handleSubmit,formState:{errors}}=useForm()
  const refcodeList=["insta","facebook","google"]
  const hobbyList=["Swmming","Drawing","badminton"]
  const validationSchema={
    refcodeValidator:{
      required:{
        value:true,
        message:"ref code is required"
      },
      validate:(param)=>
      {
        console.log("params",param)
        return refcodeList.includes(param)||"invalid ref code"
      }
    },
     hobbyValidator:
        {
            required:
            {
                value:"true",
                message:"hobby is required"
            },
            validate:(param)=>
            {
              console.log(param)
              return param.length>=2||"minimum 2 hobby"
            }
        }
  }
  const submitHandler=(data)=>
  {
    console.log(data);
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>ref code: </label>
            <input type='text' {...register("refcode",validationSchema.refcodeValidator)}></input>
            {errors.refcode?.message}
          </div>
           <div>
                <label>Hobby:</label>
                <br></br>
                Drawing<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="drawing"></input>
                Swmming<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="swmming"></input>
                badminton<input type='checkbox' {...register("hobby",validationSchema.hobbyValidator)} value="badminton"></input>
                {errors.hobby?.message}
            </div>
            
          <div>
            <input type='submit'></input>
          </div>
        </form>
    </div>
  )
}