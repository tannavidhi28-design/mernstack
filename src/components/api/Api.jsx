import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Api = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submitHandler = async (data) => {

        data.isAvailable = data.isAvailable === "true"

        console.log(data)

        const res = await axios.post(
            "https://node5.onrender.com/product/create",
            data
        )

        console.log(res)

        if (res.status == 201) {
            toast.success("Product Added !!")
          
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Api</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>NAME</label>
                    <input type="text" {...register("name")} />
                </div>

                <div>
                    <label>PRICE</label>
                    <input type="number" {...register("price")} />
                </div>

                <div>
                    <label>DESCRIPTION</label>
                    <input type="text" {...register("description")} />
                </div>

                <div>
                    <label>COLORS</label><br />
                    <input type="checkbox" value="Red" {...register("colors")} /> Red
                    <input type="checkbox" value="Green" {...register("colors")} /> Green
                    <input type="checkbox" value="Yellow" {...register("colors")} /> Yellow
                    <input type="checkbox" value="Black" {...register("colors")} /> Black
                </div>

                <div>
                    <label>SIZE</label>
                    <input type="text" {...register("size")} />
                </div>

                <div>
                    <label>UNIT</label>
                    <input type="number" {...register("unit")} />
                </div>

                <div>
                    <label>STATUS</label><br />
                    Available
                    <input type="radio" value="true" {...register("isAvailable")} />

                    Not Available
                    <input type="radio" value="false" {...register("isAvailable")} />
                </div>

                <div>
                    <input type="submit" value="ADD PRODUCT" />
                </div>

            </form>
        </div>
    )
}