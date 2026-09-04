import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Attendance from "./pages/Attendance";
import Marks from "./pages/Marks";

import "./App.css";

function App() {
  return (
    <div className="portal-container">
      <h1 className="page-heading">Student Portal</h1>

      <Navbar />

      <main className="portal-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/marks" element={<Marks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;