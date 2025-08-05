// src/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  const togglePassword = () => {
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
  };

  return (
    <div className="login-container">
      <form id="loginForm" className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Enter Email" name="email" required />

        <label htmlFor="password"><b>Password</b></label>
        <div className="password-field">
          <input type="password" id="password" placeholder="Enter Password" name="password" required />
          <i className="fa fa-eye" id="eyeIcon" onClick={togglePassword}></i>
        </div>

        <label className="remember-me">
          <input type="checkbox" defaultChecked name="remember" />
          Remember me
        </label>

        <button type="submit" className="login-button">Login</button>

        <div className="social-login">
          <p>Or log in with:</p>
          <div className="social-buttons">
            <button type="button" className="google-btn"><i className="fab fa-google"></i> Google</button>
            <button type="button" className="facebook-btn"><i className="fab fa-facebook-f"></i> Facebook</button>
            <button type="button" className="instagram-btn"><i className="fab fa-instagram"></i> Instagram</button>
          </div>
        </div>

       <Link to="/choose-role" className="create-account">Create an account</Link>

      </form>
    </div>
  );
}

export default Login;
