import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentEntry = () => {

  const navigate = useNavigate();
  const { state } = useLocation();
  const order = state
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvvCode: "",
    cardHolderName: "",
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmission = () => {
    order['credit_card_number'] = paymentDetails.cardNumber
    order['cvvCode'] = paymentDetails.cvvCode
    order['expiry_date'] = paymentDetails.expirationDate
    order['card_holder_name'] = paymentDetails.cardHolderName
    console.log(order)
    navigate("/purchase/shippingEntry", {
      state: order,
    });
  };

  return (
    <div>
      <h1>Payment Details</h1>
      <label> Credit Card Number: 
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleChange}
        />
      </label><br/>
      <label> Expiration Date:
        <input
          type="text"
          name="expirationDate"
          placeholder="Expiration Date"
          onChange={handleChange}
        />
      </label><br/>
      <label> CVV: 
      <input
        type="text"
        name="cvvCode"
        placeholder="CVV"
        onChange={handleChange}
      />
      </label><br/>
      <label>Card Holder Name:
      <input
        type="text"
        name="cardHolderName"
        placeholder="Card Holder Name"
        onChange={handleChange}
      />
      </label><br/>
      <button onClick={handleSubmission}>Checkout</button>
    </div>
  );
};

export default PaymentEntry;
