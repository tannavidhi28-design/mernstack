import React from "react";
import { MyTable } from "./MyTable";

export const TableDemo1 = () => {
  var users = [
    { id: 1, name: "amit", age: 23 },
    { id: 2, name: "raj", age: 24 },
    { id: 3, name: "jay", age: 21 },
  ];
  //[id,name,age]
  //var headers = ["id","name","age"]
  var headers = Object.keys(users[0])
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TABLE DMEO 1</h1>
      <MyTable headers={headers} data ={users}></MyTable>
    </div>
  );
};