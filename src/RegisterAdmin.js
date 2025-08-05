import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function RegisterAdmin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    adminCode: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 👇 send data to backend with role: 'admin'
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'admin'
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Admin Registration</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="organization"
          placeholder="Organization Name"
          value={formData.organization}
          onChange={handleChange}
        />
        <input
          type="text"
          name="adminCode"
          placeholder="Admin Code (if any)"
          value={formData.adminCode}
          onChange={handleChange}
        />

        <button type="submit">Request Admin Access</button>
        {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
      </form>
    </div>
  );
}

export default RegisterAdmin;
