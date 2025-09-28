export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚢 Welcome to Giatech Shipping</h1>
      <p>Track your shipments easily with live updates.</p>
      <p>Admin and Client Portal</p>

      <nav style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="/" style={linkStyle("#0070f3")}>🏠 Home</a>
        <a href="/admin" style={linkStyle("#28a745")}>🛠️ Admin</a>
        <a href="/tracking" style={linkStyle("#ff5722")}>📍 Tracking</a>
      </nav>
    </div>
  );
}

function linkStyle(bg) {
  return {
    padding: "10px 20px",
    backgroundColor: bg,
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  };
}
