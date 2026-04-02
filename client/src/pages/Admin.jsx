import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {
  const [users, setUsers] = useState([]);
  const savedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/all");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  if (!savedUser) {
    return (
      <div className="center-page">
        <div className="container">
          <div className="dashboard-card action-box">
            <h2>Admin Panel</h2>
            <p>Please login first to continue.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h2>Admin Control Center</h2>
          <p>Manage users, review platform activity, and monitor membership data.</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>📊 Platform Snapshot</h3>
            <div className="info-list">
              <p><strong>Total Users:</strong> {users.length}</p>
              <p><strong>Subscription Engine:</strong> Active</p>
              <p><strong>Score System:</strong> Functional</p>
              <p><strong>Charity Mapping:</strong> Functional</p>
              <p><strong>Winner Module:</strong> Placeholder Ready</p>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>🛠 Admin Actions</h3>
            <div className="info-list">
              <p>• Review member details</p>
              <p>• Track selected subscription plans</p>
              <p>• Inspect charity preferences</p>
              <p>• Support future draw publishing</p>
              <p>• Extend to winner verification</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card" style={{ marginTop: "20px" }}>
          <h3>👥 Registered Users</h3>

          {savedUser.role !== "admin" ? (
            <p className="empty-text">
              You are logged in as a normal user. Admin-only controls can be unlocked
              using an admin role account.
            </p>
          ) : users.length === 0 ? (
            <p className="empty-text">No users found.</p>
          ) : (
            <div className="user-table">
              <div className="user-table-header">
                <span>Name</span>
                <span>Email</span>
                <span>Plan</span>
                <span>Charity</span>
              </div>

              {users.map((user) => (
                <div className="user-table-row" key={user._id}>
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                  <span>{user.subscription}</span>
                  <span>{user.charity || "Not selected"}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;