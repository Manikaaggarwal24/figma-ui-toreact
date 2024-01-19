import React, { useState } from 'react';
import ForgotPass from "../ForgotPass/ForgotPass";
import {NavLink} from "react-router-dom";

import "./Login.css";


const Login = () => {

  const[email ,setEmail] = useState("");
const[password ,setPassword] = useState("");

const[allEntry ,setAllEntry] = useState([]);

const submitForm = (e) => {
  e.preventDefault();

 const  newEntry = {email: email , password: password};

setAllEntry([...allEntry, newEntry]);
console.log(allEntry);

}

    return (

      
      <div className= "leftbox">
      <div className= "frame">
      <div className= "headingbox">
      <div className= "box1">
      &nbsp;&nbsp;<a href='#'>Join Now</a> 
      &nbsp;&nbsp;<p>or</p> 
      &nbsp;&nbsp;<a href='#'>Sign In</a> 
      </div></div>
      
      <div className="border">
    
        <div className="box3">
        
        <div className="freeaccount"><div className="uniconstar"></div>Create your free account</div>
        
        <div className="takeless">Takes less than
        <div className="minutes">5 minutes...</div>

      <>
        <form action=""  onSubmit={submitForm}>
        
       <div className="username">
        <input type="text" className="inputtype" placeholder="Username"
         name="username" value={email}
         onChange={(e) => setEmail(e.target.value)}/>
         </div>

        <div className="password">
      <input type="text" className="inputtype" placeholder="Password" 
      name="psw" value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      </div>
</form>

</>
</div></div>

<NavLink className="forgotpass" to="/ForgotPass">Forgot password?</NavLink>
  
  
  <button type="submit" className='signin' >Join Panda</button>
</div>
  
  <div>
   
    {
      allEntry.map((curElem) => {
      return (
          <div className="forgotpass">
            <p>{curElem.email}</p>
            <p>{curElem.password}</p>
        </div>
      )
    })
  }
</div>

      </div>
      





      </div>
      

      
        
    );
  };

export default Login ;