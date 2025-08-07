import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <div className="auth-page-wrapper">
      <div className="auth-image-section">

        <div className="image-text-overlay">
          <h1>“ STAY FIT,<br />STAY YOUNG ”</h1>
          <button>Welcome to Fitness traking Website</button>
        </div>


        <img
          src="https://i.pinimg.com/1200x/68/41/97/684197f061bde5a3f49619d188e7245f.jpg"
          alt="Fitness"
          className="auth-image" />

        <div className="auth-image-section">
          <img
            src="https://i.pinimg.com/1200x/68/41/97/684197f061bde5a3f49619d188e7245f.jpg"
            alt="Fitness"
            className="auth-image"
          />

        </div>


      </div>


      <div className="auth-form-section">
        <div className="auth-toggle-buttons">
          <button
            className={`auth-toggle-button ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-toggle-button ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default AuthPage;
