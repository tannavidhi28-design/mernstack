import React from 'react'

//props --> properties
//props is keyword nthi tya apde kai b rakhi sakie pn rakhay nai props lakhie to vadhare saru
export const StudentList = (props) => {
  //props data type object hoi jsonobject
    console.log("StudentList...",props)
  return (
    <div>
        <h1>Student List</h1>
        <h1>Name :{props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h1>Student Name = {props.stu.name}</h1>
        <h1>Flag in child  {props.flag == true ?"Loading...":"Not loading.."}</h1>
        <button onClick={props.stopLoad}>STOP LOAD</button>
        <h1>{props.sales}</h1>
        <button onClick={()=>{props.setsales(200)}}>change</button>
        {props.subjcets.map((s)=>{
          return <li>{s}</li>
        })}
    </div>
  )
}
