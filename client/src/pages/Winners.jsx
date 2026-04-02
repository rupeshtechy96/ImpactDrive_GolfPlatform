function Winners() {
  return (
    <div className="center-page">
      <div className="container">
        <div className="dashboard-card action-box">
          <h2>🏆 Monthly Winners & Reward Engine</h2>
          <p>
            This section represents the monthly reward area where draw results,
            reward tiers, and winner verification can be managed.
          </p>

          <div className="winner-grid">
            <div className="glass-card">
              <h3>🥇 5-Number Match</h3>
              <p>Highest reward tier with rollover jackpot support.</p>
            </div>

            <div className="glass-card">
              <h3>🥈 4-Number Match</h3>
              <p>Secondary winner pool with split reward distribution.</p>
            </div>

            <div className="glass-card">
              <h3>🥉 3-Number Match</h3>
              <p>Entry-level reward tier for broader winner participation.</p>
            </div>
          </div>

          <div style={{ marginTop: "22px" }} className="info-list">
            <p>✅ Monthly draw publishing flow can be integrated here</p>
            <p>✅ Winner proof upload can be added here</p>
            <p>✅ Payment status: Pending → Paid can be shown here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winners;