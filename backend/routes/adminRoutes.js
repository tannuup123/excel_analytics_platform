const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ✅ Get all unapproved admins
router.get('/unapproved', async (req, res) => {
  try {
    const unapprovedAdmins = await User.find({ role: 'admin', isApproved: false });
    res.status(200).json(unapprovedAdmins);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch unapproved admins' });
  }
});

// ✅ Approve admin by ID
router.put('/approve/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { isApproved: true });
    res.status(200).json({ message: 'Admin approved' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to approve admin' });
  }
});

module.exports = router;

