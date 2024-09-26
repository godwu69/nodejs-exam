const Student = require('../models/studentModel');

// Add new student
exports.addStudent = async (req, res) => {
  try {
    const { name, age, gender, major } = req.body;

    if (!name || !age || !gender || !major) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const student = new Student({ name, age, gender, major });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get list of students
exports.getStudents = async (req, res) => {
  try {
    const { major } = req.query;
    const filter = major ? { major } : {};
    const students = await Student.find(filter);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update student information
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, major } = req.body;

    const student = await Student.findByIdAndUpdate(id, { name, age, gender, major }, { new: true });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
