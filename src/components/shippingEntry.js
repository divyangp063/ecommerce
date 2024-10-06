import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import {useState} from 'react'

const ShippingEntry = () => {
  let title = "Shipping Details";

  const navigate = useNavigate();
  const { state } = useLocation();
  const order = state
  const [addressDetails, setAddressDetails] = useState({
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zip:""
  });

  const handleChange = (e) => {
    setAddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
  };

  const handleSubmission = () => {
    order['address_1'] = addressDetails.address_1
    order['address_2'] = addressDetails.address_2
    order['city'] = addressDetails.city
    order['state'] = addressDetails.state
    order['zip'] = addressDetails.zip
    console.log(order)
    navigate("/purchase/viewOrder", {
      state: order,
    });
  };

  return (
    <div>
      <h1>
        {title}
        </h1>
      <label> Address 1: 
        <input
          type="text"
          name="address_1"
          placeholder="Address 1"
          onChange={handleChange}
        />
      </label><br/>
      <label> Address 2:
        <input
          type="text"
          name="address_2"
          placeholder="Address 2"
          onChange={handleChange}
        />
      </label><br/>
      <label> City: 
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
      />
      </label><br/>
      <label>State:
      <input
        type="text"
        name="state"
        placeholder="State"
        onChange={handleChange}
      />
      </label><br/>
      <label>Zip:
      <input
        type="text"
        name="zip"
        placeholder="Zip"
        onChange={handleChange}
      />
      </label><br/>
      <button onClick={handleSubmission}>Checkout</button>
    </div>
  );
};

export default ShippingEntry;