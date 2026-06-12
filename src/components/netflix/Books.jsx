import React, { useState } from "react";
import { BookList } from "./BookList";

export const Books = () => {

    const [bookArray, setbookArray] = useState([
        {id:1,name:"Java",price:500},
        {id:2,name:"Python",price:700},
        {id:3,name:"React",price:900},
        {id:4,name:"PHP",price:400},
        {id:5,name:"C",price:300}
    ]) 
    const deleteBook = (id)=>{
        const ans = bookArray.filter((b)=>{
            return b.id != id
        })
        setbookArray(ans)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Books</h1>
           <BookList
            bookArray={bookArray}
            deleteBook={deleteBook}
        ></BookList>
    </div>
  )
}