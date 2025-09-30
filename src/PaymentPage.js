import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ACCOUNTS, LOAN_AMOUNT, REFERENCE_NUMBER, SAMPLE_MESSAGE } from "./config";

function PaymentPage() {
  const { network } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Normalize to uppercase so it matches ACCOUNTS keys
  const normalizedNetwork = network.toUpperCase();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.includes(REFERENCE_NUMBER)) {
      setError("Invalid message. Please enter the exact reference number.");
    } else {
      setError("");
      navigate("/confirmation", { state: { message } });
    }
  };

  return (
    <div className="container">
      {/* Fraud alert banner */}
      <div className="alert-banner">
        ⚠️ Beware of fraud! We never ask you to pay into personal accounts.
        Use only the official numbers shown below.
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2>{normalizedNetwork} Payment</h2>
      <p className="warning-text">
        Please send <strong>GHS {LOAN_AMOUNT}</strong> to one of the official {normalizedNetwork} numbers below:
      </p>

      {ACCOUNTS[normalizedNetwork] ? (
        ACCOUNTS[normalizedNetwork].map((acc, index) => (
          <p key={index}>
            {normalizedNetwork} Account: <strong>{acc}</strong>
          </p>
        ))
      ) : (
        <p className="error">⚠️ No accounts found for this network.</p>
      )}

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste your payment confirmation message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <div className="success-box">
        <strong>Sample Confirmation Message:</strong>
        <p>{SAMPLE_MESSAGE}</p>
      </div>
    </div>
  );
}

export default PaymentPage;
