import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Api1 = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getUserDetail()
    }, [])

    const getUserDetail = async () => {

        const res = await axios.get("https://node5.onrender.com/item", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        setItems(res.data.data)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Api1</h1>

            <button onClick={getUserDetail}>Details</button>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.color}</td>
                                    <td>{item.status.toString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}