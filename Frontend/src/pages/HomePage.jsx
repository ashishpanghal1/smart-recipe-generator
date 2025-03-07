import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Smart Recipe Generator</h1>
      <p>Find delicious recipes based on the ingredients you have!</p>
      <button 
        onClick={() => navigate("/ingredients")} 
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px"
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
