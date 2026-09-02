import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    department: '',
    designation: '',
    salary: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);

    setFormData({
      name: '',
      employeeId: '',
      department: '',
      designation: '',
      salary: ''
    });
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">
        Employee Registration Form
      </h1>

      <form onSubmit={handleSubmit} className="registration-form">

        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter employee name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            placeholder="Enter employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Enter designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            placeholder="Enter salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Add Employee
        </button>
      </form>

      {submittedData && (
        <div className="submitted-details">
          <h2>Registered Employee Details</h2>

          <p>
            <strong>Name:</strong>{' '}
            <span className="display-name">
              {submittedData.name}
            </span>
          </p>

          <p>
            <strong>Employee ID:</strong>{' '}
            <span className="display-id">
              {submittedData.employeeId}
            </span>
          </p>

          <p>
            <strong>Department:</strong>{' '}
            <span className="display-dept">
              {submittedData.department}
            </span>
          </p>

          <p>
            <strong>Designation:</strong>{' '}
            <span className="display-desig">
              {submittedData.designation}
            </span>
          </p>

          <p>
            <strong>Salary:</strong>{' '}
            <span className="display-salary">
              {submittedData.salary}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;
