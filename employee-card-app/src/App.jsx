import Employee from './components/Employee';
import './App.css';

function App() {
  const employees = [
    {
      id: "EMP101",
      name: "Aarav Sharma",
      department: "Engineering",
      designation: "Full Stack Developer",
      salary: "85,000"
    },
    {
      id: "EMP102",
      name: "Priya Patel",
      department: "Engineering",
      designation: "Frontend Lead",
      salary: "95,000"
    },
    {
      id: "EMP103",
      name: "Rohan Verma",
      department: "Finance",
      designation: "Financial Analyst",
      salary: "70,000"
    },
    {
      id: "EMP104",
      name: "Ananya Iyer",
      department: "Human Resources",
      designation: "HR Specialist",
      salary: "65,000"
    }
  ];

  return (
    <div className="app-container">
      <h1 className="page-heading">Employee Profile Cards</h1>

      <div className="card-grid">
        {employees.map((emp) => (
          <Employee
            key={emp.id}
            name={emp.name}
            employeeId={emp.id}
            department={emp.department}
            designation={emp.designation}
            salary={emp.salary}
          />
        ))}
      </div>
    </div>
  );
}

export default App;