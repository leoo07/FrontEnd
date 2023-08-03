import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrderPage from "./CreatePage";
import CreateOrders from "./CreateCustomer";
import CrudItem from "./CrudItem";
import { Demo } from "./demo";
const LandingPage = () => {


  useEffect(() => {
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/create" element={<CreateOrderPage />} />
        <Route path="/create-orders" element={<CreateOrders />} />
        <Route path="/items" element={<CrudItem />} />
      </Routes>

    </Router>
  )
}

export default LandingPage;