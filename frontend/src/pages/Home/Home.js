import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    getUsers();
  },[]);
  const getUsers = async() =>{
    const response = await axios.get("http://localhost:5000/users");
    if(response.status ===200){
      setData(response.data)
    }
  }
  console.log(data)

  return (
    <div style={{marginTop: "150px"}}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{textAlign: 'center'}} > No. </th>
              <th style={{textAlign: 'center'}} > Name </th>
              <th style={{textAlign: 'center'}} > Contact </th>
              <th style={{textAlign: 'center'}} > Email </th>
              <th style={{textAlign: 'center'}} > University Name </th>
              <th style={{textAlign: 'center'}} > Action </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) =>{
              return(
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.uni_name}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete">Delete</button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
    </div>
  )
}

export default Home