import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Index from './views/Index';
import Home from './views/Home';
import Login from './views/Login';

function App() {


  return (
    <>
      <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/login" />
      </Routes>
    </>
  )
}

export default App
