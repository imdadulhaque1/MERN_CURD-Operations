import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./AddEdit.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  uni_name: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const {name, phone, email, uni_name} = state;
  const history = useHistory();
  const {id} = useParams();

  useEffect(() =>{
    if(id){
      getSingleUser(id);
    }
  },[id])

  const getSingleUser = async(id)=>{
    const response = await axios.get(`http://localhost:5000/user/${id}`);
      if(response.status ===200){
        setState({...response.data[0]})
      }
  }
  const addUser = async(data) =>{
    const response = await axios.post("http://localhost:5000/user", data);
    if(response.status === 200){
      toast.success(response.data);
    }
  }

  const updateUser = async(data, id) =>{
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if(response.status === 200){
      toast.success(response.data);
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name || !phone || !email || !uni_name){
      toast.error("Please provide value into each fields!");
    }else{
      if(id){
        addUser(state);
      }else{
        updateUser(state, id);
      }
      setTimeout(() =>history.push('/'), 500);
    }
  }

  const handleInputChange=(e)=>{
    let {name, value} = e.target;
    setState({...state, [name]:value});
  }
  return (
    <div style={{marginTop: "100px"}}>
        <form style={{margin: 'auto', padding:'15px', maxWidth:"700px", alignContent:"center"}} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' placeholder='Enter your name.....' onChange={handleInputChange} value={name} />

          <label htmlFor="phone">Contact No.</label>
          <input type="tel" id='phone' name='phone' placeholder='Enter your Contact No.....' onChange={handleInputChange} value={phone} />

          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' placeholder='Enter your Email.....' onChange={handleInputChange} value={email} />

          <label htmlFor="uni_name">University Name</label>
          <input type="text" id='uni_name' name='uni_name' placeholder='Enter your University Name.....' onChange={handleInputChange} value={uni_name} />

          <input type="submit" value={id ? "Update User" : "Add User"} />
        </form>
    </div>
  )
}

export default AddEdit