import React from "react";

export const MapDemo3 = () => {
  var users = [
    { id: 1, name: "amit", age: 23 },
    { id: 2, name: "raj", age: 24 },
    { id: 3, name: "jay", age: 21 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MapDemo3</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};