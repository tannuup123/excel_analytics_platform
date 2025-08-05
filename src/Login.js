import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const togglePassword = () => {
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      setMessage('Login successful');
      console.log('Token:', res.data.token);
      // Optionally store token: localStorage.setItem('token', res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />

        <label htmlFor="password"><b>Password</b></label>
        <div className="password-field">
          <input type="password" id="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
          <i className="fa fa-eye" id="eyeIcon" onClick={togglePassword}></i>
        </div>

        <label className="remember-me">
          <input type="checkbox" defaultChecked name="remember" />
          Remember me
        </label>

        <button type="submit" className="login-button">Login</button>
        {message && <p style={{ color: 'green' }}>{message}</p>}

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