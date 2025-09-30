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
      setError("⚠️ Invalid message. Please make sure it includes the correct reference number.");
    } else {
      setError("");
      navigate("/confirmation", { state: { message } });
    }
  };

  return (
    <div className="container">
      {/* Back button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      {/* Page heading */}
      <h2>{normalizedNetwork} Payment Instructions</h2>

      {/* Fraud Alert Banner right below the heading */}
      <div className="alert-banner">
        ⚠️ We have recently become aware of fraudulent individuals impersonating our company's repayment links in an attempt to deceive users into transferring funds to their accounts, resulting in financial losses for the users.  
        <br /><br />
        To ensure the safety of your funds, please verify that the repayment link you are using is from our official channels.
      </div>

      {/* Instructions */}
      <p className="warning-text">
        Please send <strong>GHS {LOAN_AMOUNT}</strong> only to one of the official {normalizedNetwork} numbers below:
      </p>

      {/* Account numbers */}
      {ACCOUNTS[normalizedNetwork] ? (
        <div className="account-list">
          {ACCOUNTS[normalizedNetwork].map((acc, index) => (
            <p key={index}>
              {normalizedNetwork} Account: <strong>{acc}</strong>
            </p>
          ))}
        </div>
      ) : (
        <p className="error">⚠️ No accounts found for this network.</p>
      )}

      {/* Reference number */}
      <div className="reference-box">
        <p><strong>Reference Number:</strong> {REFERENCE_NUMBER}</p>
      </div>

      {/* Form */}
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

      {/* Sample message */}
      <div className="success-box">
        <strong>Sample Confirmation Message:</strong>
        <p>{SAMPLE_MESSAGE}</p>
      </div>
    </div>
  );
}

export default PaymentPage;
