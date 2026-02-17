import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome back</h2>
        <p>Sign in to sync your favorites and continue listening.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
