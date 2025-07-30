
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LOAN_AMOUNT } from "./config";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const transactionId = location.state?.transactionId;

  return (
    <div className="container">
      <h2>Your order is being verified, please check back later.</h2>
      <div className="success-box">
        <p><strong>Order Number:</strong> RE{Math.random().toString(36).substring(2, 15)}</p>
        <p><strong>Pay Amount:</strong> GHS {LOAN_AMOUNT}</p>
        <p><strong>Transaction ID:</strong> {transactionId}</p>
      </div>
      <button className="submit-btn" onClick={() => navigate("/")}>Refresh</button>
    </div>
  );
}

export default ConfirmationPage;
