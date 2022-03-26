import React from 'react';
import { Link } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import "../../Stylesheets/login-signup.css";


function Signup() {
  return (
    <div className="pattern-bg">
      <div className='login-signup-form bg-white text-center my-4 p-4 w-4/5 md:w-3/5 lg:w-2/5'>
      <h3 className='text-3xl font-medium'>Sign Up</h3>
      <form>
        <InputField type="email" inputId="email" name="Email-id:" placeholder="jhon@gmail.com" /> 
        <InputField type="text" inputId="name" name="Name:" placeholder="Jhon Doe" />  
        <InputField type="password" inputId="password" name="Password:" placeholder="********" />
        <InputField type="password" inputId="cpassword" name="Confirm Password:" placeholder="********" />
        <button className='login-signup-btn px-4 py-2 mx-auto w-4/5 md:w-3/4 lg:w-3/5
         font-medium rounded'>Sign-Up</button>  
      </form>
      <p>Already have an account ? <Link  className='move-text' to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export {Signup};