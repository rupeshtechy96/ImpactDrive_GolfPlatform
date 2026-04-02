import { useState } from "react";
import API from "../services/api";

function Scores() {
  const [form, setForm] = useState({ score: "", date: "" });
  const [message, setMessage] = useState("");
  const [scores, setScores] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/scores", {
        score: Number(form.score),
        date: form.date,
      });
      setMessage(res.data.message);
      setScores(res.data.scores);
      setForm({ score: "", date: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to add score");
    }
  };

  return (
    <div className="center-page">
      <div className="container">
        <div className="dashboard-card action-box">
          <h2>Track Your Scores</h2>
          <p>
            Enter your Stableford score and date. The system automatically keeps
            only the latest five scores.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Score</label>
              <input
                type="number"
                name="score"
                placeholder="Enter score between 1 and 45"
                value={form.score}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">
              Add Score
            </button>
          </form>

          <p className="message">{message}</p>

          <div style={{ marginTop: "20px" }}>
            <h3>Latest 5 Scores</h3>
            {scores.length === 0 ? (
              <p className="empty-text">No recent score added in this session.</p>
            ) : (
              <ul className="score-list">
                {scores.map((item, index) => (
                  <li key={index}>
                    Score: {item.score} | Date: {new Date(item.date).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scores;