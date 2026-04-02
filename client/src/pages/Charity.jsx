import { useState } from "react";
import API from "../services/api";

function Charity() {
  const [charity, setCharity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put("/charity", { charity });
      setMessage(res.data.message);
      setCharity("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to save charity");
    }
  };

  return (
    <div className="center-page">
      <div className="container">
        <div className="dashboard-card action-box">
          <h2>Select Your Charity</h2>
          <p>
            Connect your membership with a meaningful cause and make your
            participation more impactful.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Charity Name</label>
              <input
                type="text"
                placeholder="Enter charity name"
                value={charity}
                onChange={(e) => setCharity(e.target.value)}
              />
            </div>

            <button type="submit" className="form-submit">
              Save Charity
            </button>
          </form>

          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Charity;