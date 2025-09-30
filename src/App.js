import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NetworkSelect from "./NetworkSelect";
import PaymentPage from "./PaymentPage";
import ConfirmationPage from "./ConfirmationPage";
import "./App.css";

function App() {
  return (
    <div>
      {/* Fraud Alert Banner */}
      <div className="alert-banner">
        ⚠️ We have recently become aware of fraudulent individuals impersonating our company's repayment links in an attempt to deceive users into transferring funds to their accounts, resulting in financial losses for the users.  
        To ensure the safety of your funds, please verify that the repayment link you are using is from our official channels.
      </div>

      {/* The rest of your site (Router) */}
      <Router>
        <Routes>
          <Route path="/" element={<NetworkSelect />} />
          <Route path="/payment/:network" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
