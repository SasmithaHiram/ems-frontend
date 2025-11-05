import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

const UseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BE_API = import.meta.env.VITE_BE_API;

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BE_API}/api/auth/login`, {
        email,
        password,
      });

      login(response.data.token);
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
