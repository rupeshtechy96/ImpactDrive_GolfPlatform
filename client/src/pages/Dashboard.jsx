import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile");
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="dashboard-card">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  const eligibility = user.subscription === "none" ? "Inactive" : "Active";

  return (
    <div className="dashboard">
      <div className="container">
        <div className="premium-banner">
          <div>
            <div className="hero-badge">✨ Member Control Panel</div>
            <h2>Welcome back, {user.name} 👋</h2>
            <p>
              Manage your golf journey, reward readiness, and charity impact from one place.
            </p>
          </div>

          <div className="banner-actions">
            <Link to="/subscribe" className="primary-btn">📦 Manage Plan</Link>
            <Link to="/scores" className="secondary-btn">📈 Add Score</Link>
          </div>
        </div>

        <div className="quick-grid">
          <div className="mini-card">
            <h4>📦 Current Plan</h4>
            <p>{user.subscription}</p>
          </div>

          <div className="mini-card">
            <h4>💚 Selected Charity</h4>
            <p>{user.charity || "Not selected"}</p>
          </div>

          <div className="mini-card">
            <h4>📊 Stored Scores</h4>
            <p>{user.scores.length}</p>
          </div>

          <div className="mini-card">
            <h4>🎯 Draw Eligibility</h4>
            <p>{eligibility}</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>👤 Profile Overview</h3>
            <div className="info-list">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Subscription:</strong> {user.subscription}</p>
              <p><strong>Selected Charity:</strong> {user.charity || "Not selected yet"}</p>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>🚀 Next Best Actions</h3>
            <div className="info-list">
              <p>• Activate or update your subscription</p>
              <p>• Save your preferred charity</p>
              <p>• Add your recent Stableford scores</p>
              <p>• Stay ready for monthly reward participation</p>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>📈 Latest Golf Scores</h3>
            {user.scores.length === 0 ? (
              <p className="empty-text">No scores added yet.</p>
            ) : (
              <ul className="score-list">
                {user.scores.map((item, index) => (
                  <li key={index}>
                    Score: {item.score} | Date: {new Date(item.date).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="dashboard-card">
            <h3>🎁 Rewards & Impact</h3>
            <div className="info-list">
              <p><strong>Reward Status:</strong> {eligibility === "Active" ? "Participation Ready" : "Activate plan first"}</p>
              <p><strong>Charity Impact:</strong> Linked to your selected cause</p>
              <p><strong>Winner Area:</strong> Available in Winners section</p>
              <p><strong>Verification Flow:</strong> Future-ready for uploads and payout status</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid" style={{ marginTop: "20px" }}>
          <div className="dashboard-card">
            <h3>🧭 Quick Navigation</h3>
            <div className="dashboard-links">
              <Link to="/subscribe" className="dash-link-card">📦 Subscription Plans</Link>
              <Link to="/charity" className="dash-link-card">💚 Charity Selection</Link>
              <Link to="/scores" className="dash-link-card">📊 Add Scores</Link>
              <Link to="/winners" className="dash-link-card">🏆 Winners Area</Link>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>📝 Platform Notes</h3>
            <div className="info-list">
              <p>• The system keeps only the latest 5 scores</p>
              <p>• Subscription improves reward eligibility</p>
              <p>• Charity choice keeps the journey purpose-led</p>
              <p>• This dashboard is designed for a premium modern product feel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;