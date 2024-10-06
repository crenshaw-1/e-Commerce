const express = require('express');
const {
  register,
  login,
  getProfile,
  updateUserRole,
  deleteUser,
  getUsers
} = require('../controllers/user.controller');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.get('/all', protect, authorize('admin'), getUsers);
router.patch('/:id/role', protect, authorize('admin'), updateUserRole);
router.delete('/:id', protect, authorize('admin'), deleteUser);

module.exports = router;