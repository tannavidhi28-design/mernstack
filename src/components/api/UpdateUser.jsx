import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export const UpdateUser = () => {
    const id = useParams().id;
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm({defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        console.log(res.data.data)
        return res.data.data //{,,,,,,,,}
    }})
    const submitHandler  =async(data)=>{
        console.log("data..",data)
        try{
            delete data._id;
            const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
            console.log("res...",res)
            if(res.status==200){
                toast.success("data updated..")
                navigate("/apidemo1")

            }
        }catch(err){
            console.log("err..",err)
        }
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>EDIT AND UPDATE</h1>
         <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}