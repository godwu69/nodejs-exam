const express = require('express');
const router = express.Router();
const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// Routes for CRUD operations
router.post('/students', addStudent);
router.get('/students', getStudents);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
