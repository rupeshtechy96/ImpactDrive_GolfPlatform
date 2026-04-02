import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          Impact<span>Drive</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>

          {!token && <Link to="/login" className="nav-link">Login</Link>}
          {!token && <Link to="/signup" className="nav-link">Signup</Link>}

          {token && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
          {token && <Link to="/subscribe" className="nav-link">Plans</Link>}
          {token && <Link to="/scores" className="nav-link">Scores</Link>}
          {token && <Link to="/charity" className="nav-link">Charity</Link>}
          {token && <Link to="/winners" className="nav-link">Winners</Link>}
          {token && <Link to="/admin" className="nav-link">Admin</Link>}

          {token && (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;