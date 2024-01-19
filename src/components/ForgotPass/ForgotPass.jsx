import React, { useState } from 'react';

import "./ForgotPass.css";

const ForgotPass = () => {


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
        
        <div className="freeaccount"><div className="uniconstar"></div>Forgot password</div>
        
        

      <>
        <form action="" >
        
       <div className="username">
        <input type="text" placeholder="Username"
         name="username"  />
         </div>

       
</form>
</>
</div></div>
  <div className="forgotpass"><a href='#'>Forgot password?</a></div>
    
  
  <button type="submit" className='signin' >Join Panda</button>
  <div>
 
</div>

      </div>
      





      </div>
      

      
        
    );
  };

export default ForgotPass ;