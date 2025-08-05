import React from 'react';
import './ChooseRole.css';
import { useNavigate } from 'react-router-dom';

function ChooseRole() {
  const navigate = useNavigate();

  
    const handleRoleSelect = (role) => {
        localStorage.setItem('selectedRole', role);
  if (role === 'user') navigate('/register-user');
  else if (role === 'admin') navigate('/register-admin');
    
  };

  return (
    <div className="choose-role-container">
      <h2>Select your role to Register</h2>
      <div className="role-buttons">
        <button className="role-btn user-btn" onClick={() => handleRoleSelect('user')}>Register as User</button>
        <button className="role-btn admin-btn" onClick={() => handleRoleSelect('admin')}>Register as Admin</button>
      </div>
    </div>
  );
}

export default ChooseRole;
