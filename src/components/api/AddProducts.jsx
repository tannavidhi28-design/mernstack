import axios from "axios";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const AddProducts = () => {

  const {register,handleSubmit,control}=useForm({defaultValues:{product:[{name:"",price:0,description:"",colors:[],size:"",isAvailable:true,unit:0}]}})
    const { append, fields ,remove } = useFieldArray({control,name: "product"});

    const submitHandler = async (data) => {
        console.log(data.product);
        const res = await axios.post("https://node5.onrender.com/product/addproducts",data.product);
        console.log(res.data);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Add Products</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    fields.map((f, index) => {
                        return (
                            <div key={f.id}>
                                <div>
                                    <label>NAME</label>
                                    <input type="text" {...register(`product.${index}.name`)} />
                                </div>

                                <div>
                                    <label>PRICE</label>
                                    <input type="number" {...register(`product.${index}.price`)} />
                                </div>

                                <div>
                                    <label>DESCRIPTION</label>
                                    <input type="text" {...register(`product.${index}.description`)} />
                                </div>

                                <div>
                                    <label>COLORS</label><br />
                                    <input type="checkbox" value="Red" {...register(`product.${index}.colors`)} /> Red
                                    <input type="checkbox" value="Green" {...register(`product.${index}.colors`)} /> Green
                                    <input type="checkbox" value="Yellow" {...register(`product.${index}.colors`)} /> Yellow
                                    <input type="checkbox" value="Black" {...register(`product.${index}.colors`)} /> Black
                                </div>

                                <div>
                                    <label>SIZE</label>
                                    <input type="text" {...register(`product.${index}.size`)} />
                                </div>

                                <div>
                                    <label>UNIT</label>
                                    <input type="number" {...register(`product.${index}.unit`)} />
                                </div>

                                <div>
                                    <label>STATUS</label>
                                    Available
                                    <input type="radio" value="true"{...register(`product.${index}.isAvailable`)}/>

                                    Not Available
                                    <input type="radio" value="false"{...register(`product.${index}.isAvailable`)}/>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>remove(index)}>Delete</button>
                                </div>
                            </div>
                        );
                    })
                }
                <div>
                    <input type="submit" value="ADD PRODUCTS" />
                </div>
            </form>
            <button
                type="button"onClick={() =>
                    append({name: "",price: 0,description: "",colors: [],size: "",isAvailable: true,unit: 0})}>
                Append
            </button>

        </div>
    );
};