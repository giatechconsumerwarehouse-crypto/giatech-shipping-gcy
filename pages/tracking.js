import { useState } from "react";

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber) {
      setResult("⚠️ Please enter a tracking number.");
      return;
    }
    // Later, you can connect this to your backend or database
    setResult(`📦 Tracking number "${trackingNumber}" is being processed...`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>📍 Shipment Tracking</h1>
      <p>Enter your tracking number below to see live updates.</p>

      <form onSubmit={handleTrack} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
            marginRight: "10px"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Track
        </button>
      </form>

      {result && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
          {result}
        </p>
      )}
    </div>
  );
}

