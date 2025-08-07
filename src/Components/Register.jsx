import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Register.css";

function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      const userData = { email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registration successful!");
      setIsLogin(true);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/dashboard");
      } else {
        alert("Invalid login details");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="auth-input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="toggle-link" onClick={toggleForm}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </p>

      <button className="auth-google">Sign in with Google</button>
      <button className="auth-facebook">Sign in with Facebook</button>
      
    </div>
  );
}

export default Register;
