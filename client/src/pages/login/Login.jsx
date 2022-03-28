import {React, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";
import "../../Stylesheets/login-signup.css";
// import axios from "axios";

function Login() {
  const navigate = useNavigate();
  // const [loginCredentials, setLoginCredentials] = useState({
  //   email: "",
  //   password: "",
  // });
  const email = useRef();
  const password = useRef();


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
       },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });
      const json = response.json();
      console.log(json.success);
      if(json.success){
        localStorage.setItem('token',json.authToken);
        navigate("/choice");
      }else{
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const changeHandler = (e) => {
  //   setLoginCredentials({...loginCredentials, [e.target.id]: e.target.value});
  // }

  return (
    <div className="pattern-bg">
      <div className="login-signup-form bg-white text-center my-8 p-4 w-4/5 md:w-3/5 lg:w-2/5">
        <h3 className="text-3xl font-medium">Login</h3>
        <p>Enter your credentials to access your account.</p>
        <form onSubmit={submitHandler}>
          <InputField
            type="email"
            inputId="email"
            name="Email-id:"
            placeholder="jhon@gmail.com"
            refVal={email}
          />
          <InputField
            type="password"
            inputId="password"
            name="Password:"
            placeholder="********"
            refVal={password}
          />
          {/* <input type="email" placeholder="email" ref={email} />
          <input type="password" placeholder="password" ref={password} /> */}
          <button
            className="login-signup-btn px-4 py-2 mx-auto w-4/5 md:w-3/4 lg:w-3/5
         font-medium rounded"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account ?
          <Link className="move-text" to="/signup">
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Login };
