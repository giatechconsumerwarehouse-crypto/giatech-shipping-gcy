import { useState } from "react";

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    // For now we’ll use a dummy status
    setStatus("📦 Your shipment is being processed. Live updates will appear here.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>📍 Track Your Shipment</h1>
      <p>Enter your tracking number below:</p>

      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter tracking ID"
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleTrack}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        Track
      </button>

      {status && (
        <div style={{ marginTop: "30px", fontSize: "18px", fontWeight: "bold" }}>
          {status}
        </div>
      )}
    </div>
  );
}
