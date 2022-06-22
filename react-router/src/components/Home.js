import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const[state,setState]= useState({
    name:"",
    password:"",
    email:"",
  })
  const handleChange= (e)=>{
    e.preventDefault();
    const data = {...state,
      [e.target.name]:e.target.value}
      // console.log(data)
      setState(data)
  }
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name" value={state.name} onChange={handleChange}/>
        <label>Password:</label>
        <input type="text" name="password" placeholder="Enter your password" value={state.password} onChange= {handleChange}/>
        <label>E-mail:</label>
        <input type="text" name="email" placeholder="Enter yor email" value={state.email} onChange= {handleChange}/>
        <button onClick={()=>navigate("aboutus")} >Submit</button>
      </form>
    </div>
  );
};
export default Home;
