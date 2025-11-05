import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const UseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const BE_API = import.meta.env.VITE_BE_API;
  const { login } = useAuth();
  const naviagte = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BE_API}/api/auth/login`, {
        email,
        password,
      });

      login(response.data.token);
      naviagte("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return {
    setEmail,
    setPassword,
    email,
    password,
    handleSubmit,
  };
};
export default UseLogin;
