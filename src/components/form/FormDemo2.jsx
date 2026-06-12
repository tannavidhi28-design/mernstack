import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const { register, handleSubmit } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    return (
        <div style={{ textAlign: "center" }}>

            <h1>FormDemo2</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>HOBBIES</label>
                    <br></br>
                    CRICKET :<input type='checkbox' value="cricket"{...register("hobbies")}></input>
                    MUSIC : <input type='checkbox' value="music" {...register("hobbies")}></input>
                    READING :<input type='checkbox' value="reading" {...register("hobbies")}></input>
                </div>
                <br></br>
                <div>
                    <label>COUNTRY</label>
                    <select {...register("country")}>
                        <option value="">SELECT COUNTRY</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                    </select>
                </div>
                <br></br>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}