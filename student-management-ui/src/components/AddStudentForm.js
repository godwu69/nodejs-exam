import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = ({ fetchStudents }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    major: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/students', formData);
      setFormData({ name: '', age: '', gender: '', major: '' });
      fetchStudents();
    } catch (error) {
      console.error("There was an error adding the student!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Major</label>
        <input type="text" name="major" value={formData.major} onChange={handleChange} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-success">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
