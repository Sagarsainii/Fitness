import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Login.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      const userData = { email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registration successful!");
      setIsRegister(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/dashboard");
      } else {
        alert("Invalid login details");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
          required
        />


        <button type="submit" className="login-button">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>


      <p className="login-toggle" onClick={toggleForm}>
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>


      <button className="login-google">Sign in with Google</button>
      <button className="login-facebook">Sign in with Facebook</button>

    </div>

  );
}

export default Login;
