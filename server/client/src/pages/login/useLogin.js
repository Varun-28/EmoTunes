import { useState } from "react";

function useLogin() {
  const [errorMsg, setErrorMsg] = useState({
    email: false,
    password: false,
    msg: "",
  });

  const loginValidation = (email, password) => {
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    if(userEmail.length === 0){
      setErrorMsg(val => ({...val, email: true, msg: "Email Required"}));
      return false;
    }else if(userPassword.length < 8){
      setErrorMsg(val => ({...val, password: true, msg: "Password must be 8 characters long"}));
      return false;
    }else{
      setErrorMsg(val => ({...val, email: false, password: false, msg: ""}));
      return true;
    }
  }

  return {errorMsg, setErrorMsg, loginValidation};
}

export { useLogin };
