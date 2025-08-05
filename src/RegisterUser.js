import React from 'react';
import './Register.css';

function RegisterUser() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>User Registration</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Membership ID (optional)" />
        <button type="submit">Register as User</button>
      </form>
    </div>
  );
}

export default RegisterUser;
