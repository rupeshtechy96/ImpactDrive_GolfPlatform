import { useState } from "react";
import API from "../services/api";

function Subscribe() {
  const [message, setMessage] = useState("");

  const updatePlan = async (plan) => {
    try {
      const res = await API.put("/subscription", { subscription: plan });
      setMessage(`Subscription updated to ${res.data.user.subscription}`);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to update plan");
    }
  };

  return (
    <div className="center-page">
      <div className="container">
        <div className="dashboard-card action-box">
          <div className="hero-badge">📦 Membership Plans</div>
          <h2>Choose the right membership plan</h2>
          <p>
            Select a premium plan to activate your journey, unlock reward eligibility,
            and keep your charity-linked participation active.
          </p>

          <div className="plan-grid">
            <div className="plan-card">
              <h3>Monthly Plan</h3>
              <p className="plan-tag">Flexible Access</p>
              <ul className="score-list">
                <li>Access to score tracking</li>
                <li>Reward participation eligibility</li>
                <li>Charity-linked experience</li>
              </ul>
              <button className="primary-btn" onClick={() => updatePlan("monthly")}>
                Choose Monthly
              </button>
            </div>

            <div className="plan-card featured-plan">
              <h3>Yearly Plan</h3>
              <p className="plan-tag">Best Value</p>
              <ul className="score-list">
                <li>Long-term membership continuity</li>
                <li>Stronger premium user feel</li>
                <li>Better annual commitment flow</li>
              </ul>
              <button className="primary-btn" onClick={() => updatePlan("yearly")}>
                Choose Yearly
              </button>
            </div>
          </div>

          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;