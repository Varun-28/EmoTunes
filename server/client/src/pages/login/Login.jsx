import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Stylesheets/login-signup.css";
import { useAlert } from "react-alert";
import { useLogin } from "./useLogin";
import axios from "axios";
import { LoaderAnimation } from "../../components/LoaderAnimation.js";

function Login() {
  const alert = useAlert();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [showLoader, setShowLoader] = useState(false);
  const { errorMsg, setErrorMsg, loginValidation } = useLogin();

  const [passwordShow, setPasswordShow] = useState(false);
  const passwordHandler = (e) => {
    e.preventDefault();
    setPasswordShow((val) => !val);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const loginTrue = loginValidation(email, password);
    if (loginTrue) {
      try {
        setShowLoader(true);
        const response = await axios.post("/api/auth/login", {
          email: email.current.value,
          password: password.current.value,
        });
        if (response.data.success) {
          alert.show("Login Success", { type: "success" });
          localStorage.setItem("token", response.data.authToken);
          navigate("/choice");
        } else {
          alert.show("Something went wrong", { type: "error" });
        }
      } catch (error) {
        const err = error.response;
        alert.show(err.data.error, { type: "error" });
      }finally{
        setShowLoader(false);
      }
    }
  };

  return (
    <div className="pattern-bg">
      <div className="login-signup-form bg-white text-center my-8 p-4 w-4/5 md:w-3/5 lg:w-2/5">
        <h3 className="text-3xl font-medium">Login</h3>
        <p>Enter your credentials to access your account.</p>
        <form onSubmit={submitHandler}>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="email">Email-id:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="email"
              id="email"
              placeholder="jhon@gmail.com"
              onFocus={() =>
                setErrorMsg((val) => ({
                  ...val,
                  email: false,
                  msg: "",
                }))
              }
              ref={email}
            />
            <p className="error-msg text-sm">
              {errorMsg.email && errorMsg.msg}
            </p>
          </div>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label className="relative" htmlFor="password">
              Password:
              <button className="password-btn" onClick={passwordHandler}>
                {passwordShow ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type={passwordShow ? "text" : "password"}
              id="password"
              placeholder="********"
              onFocus={() =>
                setErrorMsg((val) => ({
                  ...val,
                  password: false,
                  msg: "",
                }))
              }
              ref={password}
            />
            <p className="error-msg text-sm">
              {errorMsg.password && errorMsg.msg}
            </p>
          </div>
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
      {showLoader && <LoaderAnimation />}
    </div>
  );
}

export { Login };
