export default function Admin() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>🛠 Admin Portal</h1>
      <p>Control shipments, update status, and manage orders here.</p>

      <div style={{ marginTop: "30px" }}>
        <textarea
          placeholder="Enter update or instruction..."
          rows="4"
          cols="40"
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <br /><br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit Update
        </button>
      </div>
    </div>
  );
}
