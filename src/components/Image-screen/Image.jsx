import React from 'react';
import { Outlet } from 'react-router-dom';

import "./Image.css";

const Image = () => {
    return (
      <div className= "image">  
      <Outlet /> 
      </div>  
    );
   };

export default Image;
