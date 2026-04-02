import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const [form, setForm] = useState({
    name: "",
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
      const res = await API.post("/signup", form);
      setMessage(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 900);
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="container auth-grid">
        <div className="auth-left">
          <div className="hero-badge">✨ New Member Onboarding</div>
          <h1>Join the premium golf and charity experience.</h1>
          <p>
            Create your account to unlock subscription access, score tracking,
            reward participation, and meaningful charity contribution.
          </p>

          <div className="auth-points">
            <div className="auth-point">
              <span>🎯</span>
              <div>
                <h4>Member Rewards</h4>
                <p>Get access to future monthly draw participation.</p>
              </div>
            </div>

            <div className="auth-point">
              <span>📈</span>
              <div>
                <h4>Score Management</h4>
                <p>Track your latest Stableford scores in a clean dashboard.</p>
              </div>
            </div>

            <div className="auth-point">
              <span>💚</span>
              <div>
                <h4>Charity Alignment</h4>
                <p>Support a cause while enjoying a premium membership flow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-card auth-card">
          <h2>Create Account</h2>
          <p className="subtext">Start your membership journey today.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

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
                placeholder="Create your password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">
              🚀 Create Account
            </button>
          </form>

          <p className="message">{message}</p>

          <p className="subtext switch-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;