import { useEffect, useState } from "react";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const getfullname =()=>localStorage.getItem('fullname');
  const [user, setUser] = useState({
    fullname: getfullname() ||'', 
    password: "",
    email: "",
  });
  const [validation, setValidation] = useState({});
  const [passwordshown, setPasswordshown] = useState(false);
  
  useEffect(()=>{console.log("i am here")

   localStorage.setItem("fullname", user.fullname);
  },[user.fullname])

  const togglepassword = () => {
    setPasswordshown(!passwordshown);
  };
  // useEffect(()=>{
  //     setFullname("enter your fullname");
  //     setPassword("enter your password");
  //     setEmail("enter  5your email");
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newDisplay = {fullname, password, email};
    checkvalidation();
    console.log(user);
    // localStorage.setItem("password",user.password)
    // localStorage.setItem("email",user.email)
    // const getpassword = localStorage.getItem("password")
    // const getemail = localStorage.getItem("epreventDefaultmail")
    // console.log(getpassword);
    // console.log(getemail);
    // window.localStorage.setItem("name",JSON.stringify(user))
    // let userkey = Object.keys(user);
    // for (let i = 0; i < userkey.length; i++) {
    //   localStorage.setItem(userkey[i], user[userkey[i]]);
    // }
  };

  //   for (let j = 0; j < localStorage.length; j++) {
  //     let getitems = localStorage.getItem(localStorage.key(j))
  //     console.log(getitems)
  //   }
  const checkvalidation = () => {
    let errors = { ...validation };
    if (!user.fullname.trim()) {
      errors.fullname = "first name is required";
    }

    if (!user.password.trim()) {
      errors.password = "password is required";
    }
    if (!user.email.trim()) {
      errors.email = "email is required";
    }

    setValidation(errors);
  };

  const handleChange = (e) => {
    //  if(e.target.name === "fullname"){
    //      e.target.value =e.target.value.toLowerCase();

    // }
    // e.target.value = e.target.name === "fullname" ? e.target.value.toLowerCase():  e.target.value
    // eslint-disable-next-line no-lone-blocks
    setUser({
      ...user,
      [e.target.name]:
        e.target.name === "fullname"
          ? e.target.value.toLowerCase()
          : e.target.value,
    });
    delete validation[e.target.name];
  };
  // const LowerCase = (e)=>{
  //     e.target.value = e.target.value.toLowerCase();
  // }

  return (
    <div className="form">
      <div>
        <div className="fullname">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={user.fullname}
            onChange={handleChange}
            //  onInput = {LowerCase}
          />
          {validation.fullname && <p>{validation.fullname}</p>}
        </div>
        <br />
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordshown ? "text" : "password"}
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            // onInput = {LowerCase}
          />
          {validation.password && <p>{validation.password}</p>}
          <button type="button" onClick={togglepassword}>
            click
          </button>
        </div>
        <br />
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            // onInput = {LowerCase}
          />
          {validation.email && <p>{validation.email}</p>}
        </div>
        <br />
        <button type="button" onClick={handleSubmit}>
          LOGIN
        </button>
      </div>
    </div>
  );
};
export default Form;
