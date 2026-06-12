import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo8 = () => {

    const{register,handleSubmit,control}=useForm({defaultValues:{medicine:[{name:"",dosage:0,freq:0}]}})
    //defaultValues thi initial values set thay che , defauld ni andar array nu namelakhase
    //register → input connect karva mate
    //handleSubmit → form submit handle karva mate
    //control → useFieldArray mate required

    const {append,remove,fields}=useFieldArray({control,name:"medicine"})
    //fields ==> array Dynamic fields add/remove karva

    const submitHandler = (data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo8</h1>

        <form onSubmit={handleSubmit(submitHandler)}> 
            {
                fields.map((f,index)=>{
                    return <div key={f.id}>
                        <div>
                            <label>NAME</label>
                            <input type='text' {...register(`medicine.${index}.name`)}></input>
                        </div>

                        <div>
                            <label>Dosage</label>
                            <input type='text' {...register(`medicine.${index}.dosage`)}></input>
                        </div>

                        <div>
                            <label>Freq</label>
                            <input type='text' {...register(`medicine.${index}.freq`)}></input>
                        </div>

                        <button type='button' onClick={()=>remove(index)}>Delete</button>
                    </div>
                })
            }
            <div>
                <input type='submit'></input>
            </div>
        </form>
        <button onClick={()=>append({name:"",dosage:0,freq:0})}>Append</button>
    </div>
  )
}