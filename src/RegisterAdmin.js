import React from 'react';
import './Register.css';

function RegisterAdmin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your request to register as admin has been submitted for approval.');
    // 👉 Later this will go to Firebase or your backend
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Admin Registration</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Organization Name" required />
        <input type="text" placeholder="Admin Code (if any)" />
        <button type="submit">Request Admin Access</button>
      </form>
    </div>
  );
}

export default RegisterAdmin;
