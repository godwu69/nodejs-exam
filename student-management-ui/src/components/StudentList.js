import React, { useState } from 'react';
import axios from 'axios';
import EditStudentModal from './EditStudentModal';

const StudentList = ({ students, fetchStudents }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("There was an error deleting the student!", error);
    }
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Major</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.major}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => setSelectedStudent(student)}
                >
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => deleteStudent(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show the EditStudentModal if a student is selected */}
      {selectedStudent && (
        <EditStudentModal
          student={selectedStudent}
          fetchStudents={fetchStudents}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default StudentList;
