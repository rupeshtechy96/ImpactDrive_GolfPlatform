import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage(res.data.message);

      setTimeout(() => {
        navigate("/dashboard");
      }, 900);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="container auth-grid">
        <div className="auth-left">
          <div className="hero-badge">🔐 Member Access</div>
          <h1>Welcome back to your premium membership space.</h1>
          <p>
            Login to manage subscription status, review your latest scores,
            select charity preferences, and stay ready for reward participation.
          </p>

          <div className="auth-points">
            <div className="auth-point">
              <span>📦</span>
              <div>
                <h4>Plan Management</h4>
                <p>Review and update your active membership plan.</p>
              </div>
            </div>

            <div className="auth-point">
              <span>🏆</span>
              <div>
                <h4>Reward Readiness</h4>
                <p>Stay eligible for monthly participation and winner updates.</p>
              </div>
            </div>

            <div className="auth-point">
              <span>🌍</span>
              <div>
                <h4>Impact Visibility</h4>
                <p>Keep your selected charity linked to your journey.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-card auth-card">
          <h2>Member Login</h2>
          <p className="subtext">Access your dashboard and continue your journey.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">
              🔓 Login Now
            </button>
          </form>

          <p className="message">{message}</p>

          <p className="subtext switch-text">
            Don’t have an account? <Link to="/signup">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;