import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
// import Login from './pages/login';
// import Forgot from './pages/forgot';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
       <Routes>
          {/* <Route path='/' element={<Login/>} />
          <Route path='/Forgot' element={<Forgot/>} /> */}
          <Route path='/' element={<Dashboard/>} />
        </Routes>
    </>
  );
}

export default App
