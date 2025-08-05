import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [admins, setAdmins] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUnapprovedAdmins();
  }, []);

  const fetchUnapprovedAdmins = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/unapproved');
      setAdmins(res.data);
    } catch (err) {
      setMessage('Failed to fetch admins');
    }
  };

  const approveAdmin = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/approve/${id}`);
      setMessage('Admin approved successfully');
      fetchUnapprovedAdmins(); // Refresh the list
    } catch (err) {
      setMessage('Failed to approve admin');
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Approval Dashboard</h2>
      {message && <p>{message}</p>}

      {admins.length === 0 ? (
        <p>No unapproved admins</p>
      ) : (
        <ul>
          {admins.map((admin) => (
            <li key={admin._id}>
              {admin.name} - {admin.email}
              <button onClick={() => approveAdmin(admin._id)}>Approve</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminDashboard;
