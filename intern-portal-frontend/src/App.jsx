import { useState, useEffect } from 'react'

function App() {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data));
  }, []);

  if (!intern) return <div>Loading...</div>;

  return (
    <div style={{
      maxWidth: "700px",
      margin: "60px auto",
      padding: "40px",
      borderRadius: "20px",
      background: "linear-gradient(to right, #6a11cb, #2575fc)",
      color: "#fff",
      fontFamily: "'Segoe UI', sans-serif",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "30px",
        background: "linear-gradient(to right, #facc15, #f472b6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        🌟 Intern Dashboard
      </h1>

      <div style={{
        background: "rgba(255,255,255,0.1)",
        padding: "25px",
        borderRadius: "16px",
        marginBottom: "20px",
        boxShadow: "inset 0 0 10px rgba(255,255,255,0.2)"
      }}>
        <p style={{ fontSize: "1.3rem", margin: "10px 0" }}>
          👤 <strong>Name:</strong> {intern.name}
        </p>
        <p style={{ fontSize: "1.3rem", margin: "10px 0" }}>
          🧾 <strong>Referral Code:</strong>
          <span style={{
            backgroundColor: "#facc15",
            color: "#1f2937",
            padding: "4px 10px",
            marginLeft: "10px",
            borderRadius: "8px",
            fontWeight: "bold"
          }}>{intern.referralCode}</span>
        </p>
        <p style={{ fontSize: "1.3rem", margin: "10px 0" }}>
          💰 <strong>Total Donations Raised:</strong>
          <span style={{
            color: "#22c55e",
            fontWeight: "bold",
            marginLeft: "10px"
          }}>₹{intern.totalDonations}</span>
        </p>
      </div>

      <div style={{
        background: "rgba(255,255,255,0.05)",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.15)"
      }}>
        <h3 style={{
          fontSize: "1.8rem",
          marginBottom: "15px",
          color: "#fbbf24",
          borderBottom: "2px solid rgba(255,255,255,0.3)",
          paddingBottom: "8px"
        }}>
          🏅 Rewards & Unlockables
        </h3>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          lineHeight: "2rem",
          fontSize: "1.2rem"
        }}>
          <li>🥉 <strong>Bronze Badge</strong> – Reach ₹500</li>
          <li>🥈 <strong>Silver Badge</strong> – Reach ₹1000</li>
          <li>📜 <strong>Digital Certificate</strong> – Reach ₹1500</li>
          <li>🚀 <strong>Leaderboard Placement</strong> – Top 10 Donors</li>
        </ul>
      </div>

      <p style={{
        marginTop: "30px",
        textAlign: "center",
        fontSize: "0.95rem",
        color: "#d1d5db"
      }}>
        🚨 Note: Rewards are static for this demo.
      </p>
    </div>
  );
}


export default App
