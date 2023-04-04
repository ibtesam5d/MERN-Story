import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import newRequest from "../../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username | !password) return setMessage(true);
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setMessage(false);
      navigate("/");
      navigate(0);
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 data-testId="login">Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          data-testId="login"
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          data-testId="login"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-testId="login">
          Login
        </button>
        {error && error}
        {message && <span>Please fill out both username and password</span>}
        <Link to="/register">Don't have an account? Register here</Link>
      </form>
    </div>
  );
};

export default Login;
