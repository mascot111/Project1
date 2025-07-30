
import React from "react";
import { useNavigate } from "react-router-dom";

function NetworkSelect() {
  const navigate = useNavigate();

  const networks = ["MTN", "Telecel", "AirtelTigo"];

  return (
    <div className="container">
      <h2>Please select a payment method</h2>
      <div className="network-buttons">
        {networks.map((network) => (
          <button key={network} onClick={() => navigate(`/payment/${network}`)}>
            {network}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NetworkSelect;
