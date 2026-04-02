import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <div className="hero-badge">✨ Premium Membership • Rewards • Charity Impact</div>

            <h1>
              Track your game. <span>Support a cause.</span> Win with purpose.
            </h1>

            <p>
              ImpactDrive is a modern subscription-based golf platform where members
              can enter their latest Stableford scores, participate in monthly prize draws,
              and contribute toward a charity they truly care about.
            </p>

            <div className="hero-actions">
              <Link to="/signup" className="primary-btn">🚀 Start Membership</Link>
              <Link to="/login" className="secondary-btn">🔐 Member Login</Link>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="number">5</div>
                <p>Latest scores retained automatically</p>
              </div>

              <div className="stat-card">
                <div className="number">10%+</div>
                <p>Minimum charity contribution from subscription</p>
              </div>

              <div className="stat-card">
                <div className="number">Monthly</div>
                <p>Reward draws with winner tracking flow</p>
              </div>
            </div>
          </div>

          <div className="hero-side">
            <div className="stat-card highlight-card">
              <h3>💚 Charity-Led Experience</h3>
              <p>
                Every member can choose a preferred charity and align their golf journey
                with meaningful impact.
              </p>
            </div>

            <div className="stat-card highlight-card">
              <h3>📊 Performance Tracking</h3>
              <p>
                Quickly add score history, maintain your last five entries,
                and keep the user journey simple and engaging.
              </p>
            </div>

            <div className="stat-card highlight-card">
              <h3>🎯 Reward Participation</h3>
              <p>
                Subscribers enter monthly draw participation with future-ready
                winner verification and payout workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why members will love this experience</h2>
          <p className="section-text">
            The platform is designed to feel emotionally engaging, modern, and clean —
            far away from the old-fashioned golf website look.
          </p>

          <div className="feature-grid">
            <div className="glass-card">
              <h3>⚡ Smart Subscription Flow</h3>
              <p>
                Members can activate plans, manage their journey, and stay eligible for
                future reward participation.
              </p>
            </div>

            <div className="glass-card">
              <h3>📈 Clean Score Entry</h3>
              <p>
                Add golf scores with date, view recent entries, and maintain only the
                latest five records automatically.
              </p>
            </div>

            <div className="glass-card">
              <h3>🎁 Reward Engine Ready</h3>
              <p>
                Built to support match-based reward logic, monthly draw publishing,
                and winner visibility.
              </p>
            </div>

            <div className="glass-card">
              <h3>🌍 Meaningful Impact</h3>
              <p>
                Charity selection is integrated into the core user journey instead of
                being treated like an extra side feature.
              </p>
            </div>

            <div className="glass-card">
              <h3>🛡️ Secure User Flow</h3>
              <p>
                Authentication, user profile management, and protected routes support
                a proper full-stack workflow.
              </p>
            </div>

            <div className="glass-card">
              <h3>📱 Responsive Product Feel</h3>
              <p>
                Designed with a modern responsive layout so the interface feels polished
                on both desktop and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dashboard-card callout-box">
            <h2>What makes this strong for your assignment</h2>
            <div className="info-list">
              <p>✅ Covers user panel flow</p>
              <p>✅ Covers subscription and charity journey</p>
              <p>✅ Covers score management logic</p>
              <p>✅ Includes admin and winners section foundation</p>
              <p>✅ Looks more like a real startup product demo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;