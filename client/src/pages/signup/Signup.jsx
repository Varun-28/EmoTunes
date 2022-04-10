import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Stylesheets/login-signup.css";
import { useAlert } from "react-alert";
import { useSignup } from "./useSignup.js";
import { LoaderAnimation } from "../../components/LoaderAnimation.js";

function Signup() {
  const alert = useAlert();
  const navigate = useNavigate();
  const email = useRef();
  const name = useRef();
  const password = useRef();
  const confirm_password = useRef();
  const [showLoader, setShowLoader] = useState(false);
  const { errorMsg, setErrorMsg, signupValidation } = useSignup();

  const [passwordShow, setPasswordShow] = useState(false);
  const passwordHandler = (e) => {
    e.preventDefault();
    setPasswordShow((val) => !val);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const signupTrue = signupValidation(
      name,
      email,
      password,
      confirm_password
    );
    if (signupTrue) {
      try {
        setShowLoader(true);
        const response = await axios.post("/api/auth/createuser", {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        });
        if (response.data.success) {
          alert.show("Signup Success, Please Login!", { type: "success" });
          localStorage.setItem("token", response.data.authToken);
          navigate("/login");
        } else {
          alert.show("Something went wrong", { type: "error" });
        }
      } catch (error) {
        const err = error.response;
        alert.show(err.data.error, { type: "error" });
      } finally {
        setShowLoader(false);
      }
    }
  };

  return (
    <div className="pattern-bg">
      <div className="login-signup-form bg-white text-center my-4 p-4 w-4/5 md:w-3/5 lg:w-2/5">
        <h3 className="text-3xl font-medium">Sign Up</h3>
        <form onSubmit={submitHandler}>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="name">Name:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="text"
              id="name"
              placeholder="Jhon Doe"
              ref={name}
              onFocus={() =>
                setErrorMsg((val) => ({
                  ...val,
                  name: false,
                  msg: "",
                }))
              }
            />
            <p className="error-msg text-sm">{errorMsg.name && errorMsg.msg}</p>
          </div>
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
              ref={email}
              onFocus={() =>
                setErrorMsg((val) => ({
                  ...val,
                  email: false,
                  msg: "",
                }))
              }
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
              ref={password}
              onFocus={() =>
                setErrorMsg((val) => ({
                  ...val,
                  password: false,
                  msg: "",
                }))
              }
            />
            <p className="error-msg text-sm">
              {errorMsg.password && errorMsg.msg}
            </p>
          </div>
          <div
            className="input-group flex flex-col gap-y-2 text-left 
          my-4 mx-auto w-4/5 md:w-3/4 lg:w-3/5"
          >
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              className="border-2 border-solid p-2 rounded border-current"
              type="password"
              id="confirm_password"
              placeholder="********"
              ref={confirm_password}
              onFocus={() =>
                setErrorMsg((val) => ({
                  ...val,
                  confirm_password: false,
                  msg: "",
                }))
              }
            />
            <p className="error-msg text-sm">
              {errorMsg.confirm_password && errorMsg.msg}
            </p>
          </div>
          <button
            className="login-signup-btn px-4 py-2 mx-auto w-4/5 md:w-3/4 lg:w-3/5
         font-medium rounded"
          >
            Sign-Up
          </button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="move-text" to="/login">
            Login
          </Link>
        </p>
      </div>
      {showLoader && <LoaderAnimation />}
    </div>
  );
}

export { Signup };
