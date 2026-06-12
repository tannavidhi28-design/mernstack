import React from "react";
import { Link } from "react-router-dom";

export const Students = () => {

  const students = [
    { id: 1, name: "Ram", age: 23 },
    { id: 2, name: "Shyam", age: 22 },
    { id: 3, name: "Amit", age: 24 },
    { id: 4, name: "Neha", age: 21 },
    { id: 5, name: "Priya", age: 23 },
    { id: 6, name: "Raj", age: 25 }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Students List</h1>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>
                  <Link to={`/student/${s.id}`}>Result</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};