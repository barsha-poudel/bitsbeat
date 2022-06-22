import { useState } from "react";
const Dynamicform = () =>{
    const [input, setInput] = useState([
       {
            fullname:'',
            password:'',
            email:''
        }
    ])
    const Addinputs = (e) => {
        e.preventDefault();
        const values = [...input];
        values.push({
          fullname: "",
          password: "",
          email: "",
        });
        setInput(values);
      };
    const Removeinputs = (index)=>{
        const filterinputs = [...input]
        filterinputs.splice(index, 1)
        setInput(filterinputs)
    }

    return(
        <div>
           
            {input.map((inputs,index) => (
                <div key = {Math.random()*index}>
                <input type = "text" name = "fullname" placeholder="Enter your fullname" value={input.fullname}></input>
                <input type = "password" name = "password" placeholder="Enter your password" value={input.password}></input>
                <input type = "text" name = "email" placeholder="Enter your E-mail address" value={input.email}></input>
                <button onClick = {Addinputs}>ADD</button>
                <button onClick = {Removeinputs}>Delete</button>
                </div>
              
            ))}
        </div>
    )

}
export default Dynamicform;