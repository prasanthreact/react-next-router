import React from "react";

const Pending: React.FC = () => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f6fa",
      flexDirection: "column",
    }}
  >
    <div className="spinner" />
    <h2 style={{ marginTop: 24, color: "#333" }}>Loading, please wait...</h2>
    <style>{`
            .spinner {
                width: 64px;
                height: 64px;
                border: 8px solid #e0e0e0;
                border-top: 8px solid #3498db;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `}</style>
  </div>
);

export default Pending;
