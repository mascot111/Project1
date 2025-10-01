import React from "react";
import { useNavigate } from "react-router-dom";
import mtnLogo from "./assets/mtn.png";
import telecelLogo from "./assets/telecel.png";
import airtelTigoLogo from "./assets/airteltigo.png";

function NetworkSelect() {
  const navigate = useNavigate();
  const networks = [
    { name: "MTN", logo: mtnLogo },
    { name: "Telecel", logo: telecelLogo },
    { name: "AirtelTigo", logo: airtelTigoLogo },
  ];

  return (
    <div className="container">
      <h2>Please select a payment method</h2>
      <div className="network-buttons">
        {networks.map((network) => (
          <button
            key={network.name}
            className="network-button"
            onClick={() => navigate(`/payment/${network.name}`)}
          >
            <img src={network.logo} alt={network.name} className="network-logo" />
            <span>{network.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default NetworkSelect;
