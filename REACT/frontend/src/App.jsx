import  '/home/tanvir/Academic/3-1/REACT/frontend/src/App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from '/home/tanvir/Academic/3-1/REACT/frontend/src/components/Signup.jsx';
import Signin from '/home/tanvir/Academic/3-1/REACT/frontend/src/components/Signin.jsx';
import Home from '/home/tanvir/Academic/3-1/REACT/frontend/src/components/Home.jsx';
import ForgetPassword from '/home/tanvir/Academic/3-1/REACT/frontend/src/components/ForgetPassword.jsx';
import NewSubmit from '/home/tanvir/Academic/3-1/REACT/frontend/src/components/NewSubmit.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/forget-pass" element={<ForgetPassword />} />
        <Route path="/otp" element={<NewSubmit />} />
      </Routes>
    </div>
  );
}

export default App;
