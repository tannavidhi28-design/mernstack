import React from 'react'

export const MyTable = (props) => {
    //{headers:[],data:[]}
//     //data==   var users = [
//     { id: 1, name: "amit", age: 23 },
//     { id: 2, name: "raj", age: 24 },
//     { id: 3, name: "jay", age: 21 },
//   ];


  return (
    <table className='table table-dark'>
        <thead>
            <tr>
                {
                    props.headers.map((th)=>{
                        return <th>{th}</th>
                    })
                }
            </tr>
        </thead>
        
        <tbody>
                {
                    //tr = {id:1,name:"amit",age:23}
                    props.data.map((tr)=>{
                        return<tr>
                            {
                                //[id,name,age]
                                props.headers.map((td)=>{
                                    return <td>{tr[td]}</td>
                                })
                            }
                        </tr>
                    })
                }
        </tbody>
    </table>
  )
}