import React from "react";
import { MyTable } from "./MyTable";

export const TableDemo2 = () => {
  var students = [
    {
      id: 1,
      name: "Ram",
      age: 14,
      marks: 78,
      isActive: true,
      gender: "male",
      std: 9,
    },
    {
      id: 2,
      name: "Shyam",
      age: 15,
      marks: 85,
      isActive: true,
      gender: "male",
      std: 10,
    },
    {
      id: 3,
      name: "Sita",
      age: 14,
      marks: 92,
      isActive: true,
      gender: "female",
      std: 9,
    },
    {
      id: 4,
      name: "Gita",
      age: 16,
      marks: 88,
      isActive: false,
      gender: "female",
      std: 11,
    },
    {
      id: 5,
      name: "Aman",
      age: 15,
      marks: 67,
      isActive: true,
      gender: "male",
      std: 10,
    },
    {
      id: 6,
      name: "Riya",
      age: 14,
      marks: 74,
      isActive: true,
      gender: "female",
      std: 9,
    },
    {
      id: 7,
      name: "Karan",
      age: 16,
      marks: 81,
      isActive: false,
      gender: "male",
      std: 11,
    },
    {
      id: 8,
      name: "Priya",
      age: 15,
      marks: 90,
      isActive: true,
      gender: "female",
      std: 10,
    },
    {
      id: 9,
      name: "Arjun",
      age: 17,
      marks: 72,
      isActive: true,
      gender: "male",
      std: 12,
    },
    {
      id: 10,
      name: "Neha",
      age: 16,
      marks: 95,
      isActive: true,
      gender: "female",
      std: 11,
    },
  ];
  const headers = Object.keys(students[0])
  return (
    <div>
      <h1>Table Demo 2</h1>
      <MyTable headers={headers} data={students}></MyTable>
    </div>
  );
};