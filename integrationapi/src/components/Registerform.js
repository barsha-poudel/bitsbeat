import { useState } from "react";
import { useResolvedPath } from "react-router-dom";
const Registerform =()=>{
    const[user,setUser] = useState({
        username:"",
        password:"",
        email:"",
    })
    const handleSUbmit =(e)=>{
        e.preventDefault();
        console.log(user)

    }

    const handleChange =(e)=>{
       setUser({...user,
        [e.target.name]: e.target.value});

    }
    return(
        <div>
            <h1>THis is REgistration Form</h1>
            <div>
            <label>Username:</label>
            <input type="text" name="username" id="username" value={user.username} onChange={handleChange}></input>
            </div>
           <div>
           <label>Password:</label>
           <input type="password" name="password" id="password" value={user.password} onChange={handleChange}></input>
           </div>
            <div>
            <label>Email:</label>
            <input type="email" name="email" id="email" value={user.email} onChange={handleChange}></input>
            </div>
            <button type="button" onClick={handleSUbmit}>SUBMIT</button>
        </div>
    )
}
export default Registerform;