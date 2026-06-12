import React, { useState } from "react";
import { StudentList } from "./StudentList";

export const Students1 = () => {
  const [flag, setflag] = useState(true);

  const stopLoad = () => {
    setflag(false);
  };
  var name = "RAJ";
  var age = 23;
  var studentObj = {
    id: 1,
    name: "amit",
    rollno: 7,
  };
  var subjcets = ["Maths", "science", "Eng", "Phy"];
  const [sales, setsales] = useState(100)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Students</h1>
      <h1>Flag in Parent ={flag == true ? "Loading..." : "Not loading.."}</h1>
      <StudentList
        sales={sales}
        setsales = {setsales}
        name={name}
        age={age}
        stu={studentObj}
        subjcets={subjcets}
        flag={flag}
        stopLoad={stopLoad}
      ></StudentList>
    </div>
  );
};