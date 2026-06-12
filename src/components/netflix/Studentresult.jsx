import React from "react";
import { useParams } from "react-router-dom";

export const Studentresult = () => {

   const data = [{id: 1,name: "Ram",
      subjects: [
        { name: "Maths", marks: 23 },
        { name: "Science", marks: 24 },
        { name: "English", marks: 24 },
        { name: "Hindi", marks: 20 }]},

    {id: 2,name: "Shyam",
      subjects: [
        { name: "Maths", marks: 30 },
        { name: "Science", marks: 28 },
        { name: "English", marks: 25 },
        { name: "Hindi", marks: 22 }]},

    {id: 3,name: "Amit",
      subjects: [
        { name: "Maths", marks: 26 },
        { name: "Science", marks: 27 },
        { name: "English", marks: 29 },
        { name: "Hindi", marks: 21 }]},

    {id: 4,name: "Neha",
        subjects: [
        { name: "Maths", marks: 52 },
        { name: "Science", marks: 30 },
        { name: "English", marks: 58 },
        { name: "Hindi", marks: 26 }]},

    {id: 5,name: "Priya",
      subjects: [
        { name: "Maths", marks: 25 },
        { name: "Science", marks: 26 },
        { name: "English", marks: 27 },
        { name: "Hindi", marks: 24 }]},

    {id: 6,name: "Raj",
      subjects: [
        { name: "Maths", marks: 29 },
        { name: "Science", marks: 31 },
        { name: "English", marks: 30 },
        { name: "Hindi", marks: 28 }]}
  ];


  const id = useParams().id;
  const student = data.find((s) => s.id == id);
  let total = 0;
  for (let i = 0; i < student.subjects.length; i++) {
    total += student.subjects[i].marks;
  }
  const percentage = total / student.subjects.length;

  let overallGrade = "";
  if (percentage >= 30) {
    overallGrade = "A";
  } else if (percentage >= 25) {
    overallGrade = "B";
  } else if (percentage >= 20) {
    overallGrade = "C";
  } else {
    overallGrade = "F";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Result</h1>

      <h2>Student Name: {student.name}</h2>
      <h2>date:{new Date().toLocaleString()}</h2>
      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {
            student.subjects.map((sub) => {

              let grade = "";
              if (sub.marks >= 30) {
                grade = "A";
              } else if (sub.marks >= 25) {
                grade = "B";
              } else if (sub.marks >= 20) {
                grade = "C";
              } else {
                grade = "F";
              }

              return (
                <tr>
                  <td>{sub.name}</td>
                  <td>{sub.marks}</td>
                  <td>{grade}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <h3>Total Marks: {total}</h3>
      <h3>Percentage: {percentage}%</h3>
      <h3>Overall Grade: {overallGrade}</h3>
    </div>
  );
};