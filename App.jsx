import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  if (!user) {
    return (
      <div style={styles.center}>
        <div style={styles.card}>
          <h2>StakeFlow Hub</h2>
          <p>Login (Simulasi)</p>
          <button onClick={() => setUser({ name: "Admin", role: "Admin" })}>
            Login Admin
          </button>
          <button onClick={() => setUser({ name: "Staff", role: "Staff" })}>
            Login Staff
          </button>
          <button onClick={() => setUser({ name: "Viewer", role: "Viewer" })}>
            Login Viewer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <h3>StakeFlow</h3>
        <p>
          <b>{user.name}</b> ({user.role})
        </p>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("stakeholders")}>Stakeholders</button>
        <button onClick={() => setUser(null)}>Logout</button>
      </aside>

      <main style={styles.main}>
        {page === "dashboard" && (
          <>
            <h2>Dashboard</h2>
            <p>Welcome to StakeFlow Hub.</p>
          </>
        )}

        {page === "stakeholders" && (
          <>
            <h2>Stakeholders</h2>
            <ul>
              <li>Dinas ESDM Prov. Kalimantan Selatan</li>
              <li>DLH Kabupaten Balangan</li>
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

const styles = {
  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "white",
    padding: 24,
    borderRadius: 8,
    width: 300,
    textAlign: "center",
  },
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: 220,
    background: "#1f2937",
    color: "white",
    padding: 16,
  },
  main: {
    flex: 1,
    padding: 24,
  },
};