import { useState } from "react";

function useSignup() {
  const [errorMsg, setErrorMsg] = useState({
    name: false,
    email: false,
    password: false,
    confirm_password: false,
    msg: "",
  });

  const signupValidation = (name, email, password, confirm_password) => {
    const userName = name.current.value;
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const userCpassword = confirm_password.current.value;
    if (userName.length < 3) {
      setErrorMsg((val) => ({
        ...val,
        name: true,
        msg: "Name must be 3 characters long",
      }));
      return false;
    } else if (userEmail.length === 0) {
      setErrorMsg((val) => ({ ...val, email: true, msg: "Email Required" }));
      return false;
    } else if (userPassword.length < 8) {
      setErrorMsg((val) => ({
        ...val,
        password: true,
        msg: "Password must be 8 characters long",
      }));
      return false;
    } else if (userPassword !== userCpassword) {
      setErrorMsg((val) => ({
        ...val,
        confirm_password: true,
        msg: "Password and Confirm Password must be same",
      }));
      return false;
    } else {
      setErrorMsg((val) => ({
        ...val,
        name: false,
        email: false,
        password: false,
        confirm_password: false,
        msg: "",
      }));
      return true;
    }
  };

  return { errorMsg, setErrorMsg, signupValidation };
}

export { useSignup };
