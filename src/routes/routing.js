import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../component/user/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";
import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/sign-UP/SignUp";
import { ProtectedRoute } from "./ProtectedRoute";

export const Routing = () => {
  const [username, setUsername] = useState("");
  const dataHandler = (username) => {
    setUsername(username);
  };
  return (
    <Routes>
      <Route exact path="/" element={<Login dataHandler={dataHandler} />} />
      <Route path="/signup" element={<SignUp />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="profile" element={<Profile username={username} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/Dashboard"
        element={<ProtectedRoute Component={Dashboard} />}
      />
    </Routes>
  );
};
