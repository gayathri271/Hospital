import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-title">Hospital Management</Link>
        <div className="navbar-links">
          <Link to="/login">Login</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/doctor">Doctor</Link>
          <Link to="/patient">Patient</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;