import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false)
  const [singleUser, setsingleUser] = useState({})

  const getUserDetail =async(id)=>{
    //api...
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
    console.log("res..",res)
    //res.data --->api response
    //res.data.data -->object ..
    setsingleUser(res.data.data)
    setshow(true)
  }
  const handleClose =()=>{
    setshow(false)
  }

  const getUsers = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user/");
    console.log(res); //axios object
    //axios object -->5 param -->data variable -->api response
    console.log(res.data);
    console.log(res.data.message); //""
    console.log(res.data.data); //[]
    setmessage(res.data.message);
    setusers(res.data.data); //-->fix
    setisLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async(id) => {
    
    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    console.log(res) //axios object..
    if(res.status==204){
        toast.error("user deleted !!")
        getUsers() //api
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo1</h1>
      {isLoading && <Loader />}
      {message}
      {/* <button onClick={getUsers}>GET</button> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((m) => {
            return (
              <tr>
                <td>{m._id}</td>
                <td>{m.name}</td>
                <td>{m.age}</td>
                <td>{m.email}</td>
                <td>{m.isActive == true ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(m._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button className="btn btn-primary" onClick={()=>{getUserDetail(m._id)}}>
                    DETAIL
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

       <Modal show={show} onHide={handleClose}>
            <Modal.Header>USER DETAIL</Modal.Header>
            <Modal.Body>
                <p>Name ={singleUser.name} </p>
                <p>AGe = {singleUser.age}</p>
            </Modal.Body>
       </Modal>
    </div>
  );
};