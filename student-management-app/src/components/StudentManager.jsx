import React, { useState } from 'react'; 
 
function StudentManager() { 
  // 1. Form state for the three controlled input fields 
  const [formData, setFormData] = useState({ 
    name: '', 
    rollNumber: '', 
    branch: '' 
  }); 
 
  // 2. State array for managing the collection of students 
  const [students, setStudents] = useState([]); 
 
  // 3. Update input state dynamically 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value 
    })); 
  }; 
 
  // 4. Add Student handler (Create) 
  const handleAddStudent = (e) => { 
    e.preventDefault(); 
    if (!formData.name || !formData.rollNumber || !formData.branch) return; 
 
    // Append new student immutably 
    setStudents((prev) => [...prev, formData]); 
 
    // Reset input fields 
 
 
    setFormData({ 
      name: '', 
      rollNumber: '', 
      branch: '' 
    }); 
  }; 
 
  // 5. Delete Student handler (Delete) 
  const handleDeleteStudent = (rollToDelete) => { 
    setStudents((prev) => prev.filter((student) => student.rollNumber !== rollToDelete)); 
  }; 
 
  return ( 
    <div className="student-container"> 
      <h1 className="main-heading">Student Management System</h1> 
 
      {/* Input Form */} 
      <form onSubmit={handleAddStudent} className="student-form"> 
        <div className="input-group"> 
          <input 
            type="text" 
            name="name" 
            placeholder="Student Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          /> 
        </div> 
        <div className="input-group"> 
          <input 
            type="text" 
            name="rollNumber" 
            placeholder="Roll Number" 
            value={formData.rollNumber} 
            onChange={handleChange} 
            required 
          /> 
        </div> 
        <div className="input-group"> 
          <input 
            type="text" 
            name="branch" 
            placeholder="Branch" 
            value={formData.branch} 
            onChange={handleChange} 
            required 
          /> 
        </div> 
        <button type="submit" className="btn-add"> 
          Add Student 
        </button> 
 
 
      </form> 
 
      {/* Dynamic List / Empty State View */} 
      <div className="records-section"> 
        {students.length === 0 ? ( 
          <p className="no-records">No Students Found</p> 
        ) : ( 
          <table className="student-table"> 
            <thead> 
              <tr> 
                <th>Student Name</th> 
                <th>Roll Number</th> 
                <th>Branch</th> 
                <th>Action</th> 
              </tr> 
            </thead> 
            <tbody> 
              {students.map((student) => ( 
                <tr key={student.rollNumber} className="student-row"> 
                  <td className="student-name-cell">{student.name}</td> 
                  <td className="student-roll-cell">{student.rollNumber}</td> 
                  <td className="student-branch-cell">{student.branch}</td> 
                  <td> 
                    <button 
                      type="button" 
                      className="btn-delete" 
                      onClick={() => handleDeleteStudent(student.rollNumber)} 
                    > 
                      Delete 
                    </button> 
                  </td> 
                </tr> 
              ))} 
            </tbody> 
          </table> 
        )} 
      </div> 
    </div> 
  ); 
} 
 
export default StudentManager; 