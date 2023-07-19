import React, { useState } from "react";

const CreateOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [date, setDate] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleCreateOrder = () => {
    // Perform actions to create an order using the input values
    // For this example, we'll just log the order details
    console.log("Order Number:", orderNumber);
    console.log("Date:", date);
    console.log("Customer ID:", customerId);
    console.log("Amount:", amount);
    console.log("Currency:", currency);
  };

  return (
    <div>
      <h1>Create Order</h1>
      <input
        type="text"
        placeholder="Order Number"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <button onClick={handleCreateOrder}>Create Order</button>
    </div>
  );
};

export default CreateOrderPage;
