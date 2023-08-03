import React, { useState } from "react";
import axios from 'axios';

import './CreatePage.css'


const CreateOrderPage = () => {
  const [loading, setLoading] = useState(true)
  const [showOrderDetails, setShowOrderDetails] = useState(false)
  const [userText, setUserText] = useState('')
  const [allOrders, setAllOrders] = useState([])

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `http://v248s4i.exa-ag.com:8000/sap/opu/odata/sap/ZORD_DETAIL_SRV/order_detailsSet?$filter=ORD_ID%20eq%20('${userText}')&$format=json`
      );
      const { data } = response;

      if (data && data?.d?.results) {
        setAllOrders(data?.d?.results)
        setShowOrderDetails(true)

      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  function numberToWords(value) {
    const number = +value;

    const ones = [
      "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    if (number < 20) {
      return ones[number];
    } else if (number < 100) {
      const ten = Math.floor(number / 10);
      const one = number % 10;
      return tens[ten] + (one > 0 ? " " + ones[one] : "");
    } else {
      const hundred = Math.floor(number / 100);
      const remaining = number % 100;
      return ones[hundred] + " Hundred" + (remaining > 0 ? " and " + numberToWords(remaining) : "");
    }
  }

  return (loading && allOrders.length > 0 ? <>
    <p>Loading...</p>
  </> :
    <div>
      <div className='button-container'>
        <h1 className='buttondes' >Display Order : </h1>
        <input type="text" placeholder="Enter Order Id" onChange={(e) => setUserText(e.target.value)} />
        <button onClick={handleSubmit}>DISPLAY</button>
      </div>


      {showOrderDetails ? <>
        <div>

          <h1 className="heading">ORDER DETAILS</h1>

          <div className="cust">
            <p>Order ID : {allOrders[0]?.ORD_ID}</p>
            <p>Customer Name :{allOrders[0]?.CUST_NAME}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Customer ID : {allOrders[0]?.CUST_ID}</p>
            <p>Customer Email : {allOrders[0]?.CUST_EMAIL} &nbsp; &nbsp; Customer mobile : {allOrders[0]?.CUST_MOBILE}</p>
          </div>

          <hr className="separator" />
          <div className="order-summary-box">
            <h2>Delivery Address</h2>

            <div>{allOrders[0]?.CUST_STREET} {allOrders[0]?.CUST_AREA} </div>
            <div>{allOrders[0]?.CUST_CITY} {allOrders[0]?.PINCODE}</div>
          </div>
          <div className="order-summary-box">
            <hr className="separator" />
            <h2>Items Ordered</h2>

            <table className="table-design">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>AMOUNT</th>

                </tr>
              </thead>
              <tbody>
                {allOrders.map(({ ITEM_ID, ITEM_DESC, ITEM_PRICE, QUANTITY, AMOUNT }) => (
                  <tr key={ITEM_ID}>
                    <td>{ITEM_ID}</td>
                    <td>{ITEM_DESC}</td>
                    <td>{ITEM_PRICE}</td>
                    <td>{QUANTITY}</td>
                    <td>{AMOUNT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <div className="flex-container">
                <div className="flex-item">
                  <h3 className="head1">{numberToWords(allOrders[0]?.ORD_AMT)} Rupees</h3>
                </div>
                <div className="flex-item">
                  <h3 className="head">Total Amount: {allOrders[0]?.ORD_AMT}</h3>
                </div>
              </div>
            </div>
            <hr className="separator" />
            <h2>Payment Details</h2>
            <div className="cust">Payment Mode</div>
            <div >{allOrders[0]?.PAYMENT_MODE} : {allOrders[0]?.CARD_NUM}</div>


          </div>
          <div className="order-summary-box">
            <hr className="separator" />
            <h2>Billing Address</h2>


            <div className="cust">Address</div>
            <div>{allOrders[0]?.CUST_STREET} {allOrders[0]?.CUST_AREA} </div>
            <div>{allOrders[0]?.CUST_CITY} {allOrders[0]?.PINCODE}</div>


          </div>
        </div>
      </> : <></>}

    </div>

  )
};

export default CreateOrderPage;
