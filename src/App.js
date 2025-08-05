// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ChooseRole from './ChooseRole';
import RegisterUser from './RegisterUser';     // ✅ new import
import RegisterAdmin from './RegisterAdmin';   // ✅ new import
import AdminDashboard from './AdminDashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route path="/register-user" element={<RegisterUser />} />   {/* 👈 user registration */}
          <Route path="/register-admin" element={<RegisterAdmin />} /> {/* 👈 admin registration */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
