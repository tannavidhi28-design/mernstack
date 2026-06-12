import React from "react";

export const BookList = (props) => {

    console.log("BookList....",props)

  return (
    <div>
        <h1>Book List</h1>
        <table className='table table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
            </tr>
            {props.bookArray.map((b)=>{
                return(
                    <tr>
                        <td>{b.id}</td>
                        <td>{b.name}</td>
                        <td>{b.price}</td>
                        <td>
                            <button onClick={()=>{props.deleteBook(b.id)}}>
                                DELETE
                            </button>
                        </td>
                    </tr>
                )
            })}

        </table>

    </div>
  )
}