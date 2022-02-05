import React, { useEffect, useState } from 'react';
import './app.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        if(response.status === 200) return response.json()
        throw new Error("authentication has been failed")
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err => {
        console.error(err)
      })
    }
    getUser()
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={!user ? <Navigate to="/login"/> :<Post/>} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
