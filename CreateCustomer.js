import { useState } from "react";

const CreateOrders = () => {
    const [showCreate, setShowCreate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const handleCreateClick = () => setShowCreate(!showCreate)
    const handleDeleteClick = () => setShowDelete(!showDelete)

  const [customerid, setCustomerId] = useState("");
  const [customername, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  const [mobilenumber, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateOrder = () => {
    // Perform actions to create an order using the input values
    // For this example, we'll just log the order details
    console.log("Customer ID:", customerid);
    console.log("Customer Name:", customername);
    console.log("Date Of Birth:", date);
    console.log("Mobile Number:", mobilenumber);
    console.log("Email:", email);
  };

    return(
        <div>
            <button onClick={handleCreateClick}>Create</button>
         
        
        {showCreate ? 
            <div>
            <h1>Create Customer</h1>
            <input
              type="text"
              placeholder="Customer ID"
              value={customerid}
              onChange={(e) => setCustomerId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Customer Name"
              value={customername}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date Of Birth"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={mobilenumber}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
            <button onClick={handleCreateOrder}>Create Customer</button>
          </div>
        : null}

       
        </div>
    )
}

export default CreateOrders;