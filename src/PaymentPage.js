import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ACCOUNTS, LOAN_AMOUNT, REFERENCE_NUMBER, SAMPLE_MESSAGE } from "./config";

function PaymentPage() {
  const { network } = useParams();
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (transactionId.trim() === "") {
      setError("Cannot be empty");
    } else {
      setError("");
      navigate("/confirmation", { state: { transactionId } });
    }
  };

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
      <h2>{network} Payment Instructions</h2>

      {/* Fraud Alert Banner */}
      <div className="alert-box">
        <span className="alert-icon">⚠️</span>
        <p>
          We have recently become aware of fraudulent individuals impersonating
          our company's repayment links in an attempt to deceive users into
          transferring funds to their accounts, resulting in financial losses
          for the users.
          <br />
          To ensure the safety of your funds, please verify that the repayment
          link you are using is from our official channels.
        </p>
      </div>

      <p className="warning-text">
        Please do NOT send money to any number other than the official accounts below.
      </p>

      <div className="steps">
        <h3>Step 1: Copy an Account Number</h3>
        {ACCOUNTS[network].map((acc, index) => (
          <p key={index}>
            {network} Account: <strong>{acc}</strong>
          </p>
        ))}

        <h3>Step 2: Go to your {network} app and pay</h3>

        <h3>Step 3: Use this Loan number as Reference</h3>
        <p>
          <strong>Reference:</strong> {REFERENCE_NUMBER}
        </p>

        <h3>Step 4: Enter your Transaction ID or SMS below</h3>
      </div>

      <div className="form-section">
        <textarea
          placeholder="Enter transaction ID or SMS"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="confirmation-box">
        <h3>Sample message you will receive:</h3>
        <p>{SAMPLE_MESSAGE}</p>
      </div>
    </div>
  );
}

export default PaymentPage;
