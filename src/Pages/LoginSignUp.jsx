import React, { useState } from 'react'
import './CSS/LoginSignUp.css'
import { login,signup } from '../firebase';

const LoginSignUp = () => {
  const [signState,setSignState] = useState("Sign In");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const userAuth= async(event)=>{
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{signState}</h1>
        <div className="loginsignup-fields">
          {signState=== "Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your Name' />:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Your E-mail Id' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='text' placeholder='Password' />
        </div>
        <button onClick={userAuth}>{signState}</button>
        <div className="loginsignup-login">
          {signState==="Sign Up"? (
            <>
          <p>Already have an account? <span onClick={(e)=>{setSignState("Sign In")}}>Sign In</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Remember Me</p>
          </div>
          </>
          ) : (
          <p>New to Shopper?<span onClick={(e)=>{setSignState("Sign Up")}}> Sign Up</span></p>)}
        </div>

      </div>
      
    </div>
  )
}

export default LoginSignUp
