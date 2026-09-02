function Employee({ name, employeeId, department, designation, salary }) {
  return (
    <div className="employee-card">
      <h2 className="employee-name">{name}</h2>

      <p className="employee-id">
        <strong>Employee ID:</strong> {employeeId}
      </p>

      <p className="employee-dept">
        <strong>Department:</strong> {department}
      </p>

      <p className="employee-desig">
        <strong>Designation:</strong> {designation}
      </p>

      <p className="employee-salary">
        <strong>Salary:</strong> ₹{salary}
      </p>
    </div>
  );
}

export default Employee;