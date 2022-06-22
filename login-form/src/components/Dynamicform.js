// import { useState } from "react";
// const Dynamicform = () => {
//   const obj = {
//     fullname: "",
//     password: "",
//     email: "",
//   };

//   const [inputs, setInput] = useState([]);
//   const [forminputs, setForminputs] = useState(obj);
//   const Addinputs = (e) => {
//     e.preventDefault();
//     const values = [...inputs];
//     values.push(forminputs);
//     setInput(values);
//     setForminputs(obj);
//     console.log(values)
//   };

//   const Removeinputs = (index) => {
//     const filterinputs = [...inputs];
//     filterinputs.splice(index, 1);
//     setInput(filterinputs);
//     console.log(filterinputs)
//   };
//   const handleChange = (event, i) => {
//     const data = { ...forminputs, [event.target.name]: event.target.value };
//     setForminputs(data);
    
//   };

//   return (
//     <form>
//       <div>
//         <input
//           type="text"
//           name="fullname"
//           placeholder="Enter your fullname"
//           value={forminputs.fullname}
//           onChange={(event) => handleChange(event)}
//         ></input>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={forminputs.password}
//           onChange={(event) => handleChange(event)}
//         ></input>
//         <input
//           type="text"
//           name="email"
//           placeholder="Enter your E-mail address"
//           value={forminputs.email}
//           onChange={(event) => handleChange(event)}
//         ></input>
//         <button onClick={Addinputs}>ADD</button>
//         <button onClick={Removeinputs}>Delete</button>
//       </div>

//        {!!inputs.length && (
//         <div>
//           {inputs.map((input, index) => {
//             return (
//               <div key= {Math.random()*index}>
//                 <input
//                   type="text"
//                   name="fullname"
//                   placeholder="Enter your fullname"
//                   value={inputs[index].fullname}
//                   onChange={(event) => handleChange(event)}
//                 ></input>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   value={inputs[index].password}
//                   onChange={(event) => handleChange(event)}
//                 ></input>
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="Enter your E-mail address"
//                   value={inputs[index].email}
//                   onChange={(event) => handleChange(event)}
//                 ></input>
//                 <button onClick={Addinputs}>ADD</button>
//         <button onClick={Removeinputs}>Delete</button>
//               </div>
//             );
//           })}
//         </div> 
//       )}
//     </form>
//   );
// };
// export default Dynamicform;
