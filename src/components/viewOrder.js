import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewOrder = () => {
  const { state: order } = useLocation();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/purchase/confirmation", { state: order });
  };

  return (
    <div>
      <h1>View Order</h1>
      <div>
        <h2>Please validate your order details:</h2>

        {/* display Order Summary */}
        <div>
          <h3>Order Summary</h3>
          <p><strong>Products (Quantities):</strong> {order.buyQuantity.join(", ")}</p>
        </div>

        {/* display Payment Details */}
        <div>
          <h3>Payment Information</h3>
          <p><strong>Card Holder Name:</strong> {order.card_holder_name}</p>
          <p><strong>Credit Card Number (Last 4 digits):</strong> **** **** **** {order.credit_card_number.slice(-4)}</p>
        </div>

        {/* display Shipping Details */}
        <div>
          <h3>Shipping Information</h3>
          <p><strong>Address:</strong> {order.address_1}, {order.address_2}, {order.city}, {order.state}, {order.zip}</p>
        </div>

        {/* prompt the user to validate */}
        <div>
          <h4>Please ensure that all the information is correct before confirming your order.</h4>
          <p>If everything is correct, click 'Confirm Order' below to complete your purchase.</p>
        </div>

        {/* confirm Order Button */}
        <button onClick={handleConfirm}>Confirm Order</button>
      </div>
    </div>
  );
};

export default ViewOrder;
