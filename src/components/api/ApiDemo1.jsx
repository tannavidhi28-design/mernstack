import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user/");

    setmessage(res.data.message);
    setusers(res.data.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo1</h1>
      <button onClick={getUsers}>GET USERS</button>
      <h3>{message}</h3>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Active</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u._id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>{u.age}</td>
              <td>
                {u.isActive === true
                  ? "Active"
                  : u.isActive === false
                  ? "Inactive"
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};