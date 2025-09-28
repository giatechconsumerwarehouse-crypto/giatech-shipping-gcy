import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚢 Welcome to Giatech Shipping</h1>
      <p>Track your shipments easily with live updates.</p>
      <p>Admin and Client Portal</p>

      <nav style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <Link href="/" legacyBehavior>
          <a style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>🏠 Home</a>
        </Link>

        <Link href="/admin" legacyBehavior>
          <a style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>🛠 Admin</a>
        </Link>

        <Link href="/tracking" legacyBehavior>
          <a style={{
            padding: "10px 20px",
            backgroundColor: "#ff5722",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}>📍 Tracking</a>
        </Link>
      </nav>
    </div>
  );
              }
