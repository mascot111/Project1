
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NetworkSelect from "./NetworkSelect";
import PaymentPage from "./PaymentPage";
import ConfirmationPage from "./ConfirmationPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NetworkSelect />} />
        <Route path="/payment/:network" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
