import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from the API
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error("There was an error fetching students!", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Student Management</h1>
      <AddStudentForm fetchStudents={fetchStudents} />
      <StudentList students={students} fetchStudents={fetchStudents} />
    </div>
  );
};

export default App;
