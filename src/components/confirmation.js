import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state: order } = useLocation();
  
  // hardcoded confirmation number
  const confirmationNumber = "ABC123456789"; 

  return (
    <div>
      <h1>Order Confirmation Page</h1>
      <h2>Thank you for your purchase!</h2>
      <div>
        <h3>Your order has been successfully completed.</h3>
        <p><strong>Confirmation Number:</strong> {confirmationNumber}</p>

        <h3>Order Summary</h3>
        <p><strong>Products Ordered (Quantities):</strong> {order.buyQuantity.join(", ")}</p>

        <h3>Payment Information</h3>
        <p><strong>Card Holder Name:</strong> {order.card_holder_name}</p>
        <p><strong>Credit Card Number (Last 4 digits):</strong> **** **** **** {order.credit_card_number.slice(-4)}</p>

        <h3>Shipping Information</h3>
        <p><strong>Address:</strong> {order.address_1}, {order.address_2}, {order.city}, {order.state}, {order.zip}</p>

        <h4>We will send a confirmation email with the details of your purchase shortly.</h4>
        <p>If you have any questions, feel free to contact our customer support.</p>
      </div>
    </div>
  );
};

export default Confirmation;
