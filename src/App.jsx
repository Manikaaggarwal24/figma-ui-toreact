import React from 'react';
import '../src/App.css';
import Image  from "../src/components/Image-screen/Image.jsx";
import Login from './components/login/login.jsx';
import ForgotPass from "./components/ForgotPass/ForgotPass.jsx";


const App = () => {
  return (
      <>
     <div className= "flexbox">
        <Image />
        <Login /> 
        <ForgotPass />
    </div>
    </>
  );
};

export default App;
