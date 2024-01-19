import React from 'react';
import {  Route ,Routes } from 'react-router-dom';
import '../src/App.css';
import Login from "./components/Login/Login.jsx";
import ForgotPass from './components/ForgotPass/ForgotPass.jsx';
import Image from './components/Image-screen/Image.jsx';

const App = () => {
  return (
    
      <>
     <div className= "flexbox">
     
     <Image />
     <Routes>
    
     <Route path="/" element={<Login/>} />
     <Route path="/ForgotPass" element={<ForgotPass/>} />
    
      </Routes>
        
        
    </div>
    </>
  );
};

export default App;
