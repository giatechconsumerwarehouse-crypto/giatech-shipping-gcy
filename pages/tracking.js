import { useState } from "react";

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    // Fake tracking response for now
    if (trackingId === "12345") {
      setStatus("🚚 Your package is on the way to Metro Manila.");
    } else if (trackingId === "67890") {
      setStatus("✅ Your package has been delivered.");
    } else {
      setStatus("❌ Tracking ID not found.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>📍 Shipment Tracking</h1>
      <p>Enter your tracking ID to see the status of your shipment.</p>

      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter Tracking ID"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginRight: "10px" }}
      />
      <button
        onClick={handleTrack}
        style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "6px" }}
      >
        Track
      </button>

      {status && (
        <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>{status}</p>
      )}
    </div>
  );
}
