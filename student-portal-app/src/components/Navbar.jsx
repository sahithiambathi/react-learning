import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="portal-navbar">
      <Link to="/" className="nav-link">
        Dashboard
      </Link>

      <Link to="/profile" className="nav-link">
        Profile
      </Link>

      <Link to="/attendance" className="nav-link">
        Attendance
      </Link>

      <Link to="/marks" className="nav-link">
        Marks
      </Link>
    </nav>
  );
}

export default Navbar;