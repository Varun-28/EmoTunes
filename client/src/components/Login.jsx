import React from 'react';
import { Link } from 'react-router-dom';
import { InputField } from './InputField';
import "../Stylesheets/login-signup.css";

function Login() {
  return (
    <div className="pattern-bg">
      <div className='login-signup-form bg-white text-center my-8 p-4 w-4/5 md:w-3/5 lg:w-2/5'>
      <h3 className='text-3xl font-medium'>Login</h3>
      <p>Enter your credentials to access your account.</p>
      <form>
        <InputField type="email" inputId="email" name="Email-id:" placeholder="jhon@gmail.com" /> 
        <InputField type="password" inputId="password" name="Password:" placeholder="********" />
        <button className='login-signup-btn px-4 py-2 mx-auto w-4/5 md:w-3/4 lg:w-3/5
         font-medium rounded'>Login</button> 
      </form>
      <p>Don't have an account ? <Link  className='move-text' to='/signup'>Sign-up</Link></p>
      </div>
    </div>
  )
}

export {Login};