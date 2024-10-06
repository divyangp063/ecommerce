import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useState} from 'react'

const ViewOrder = () => {

  const {state} = useLocation()


  let title = "order page";

  return (
    <div>
      <h1>
        View Order
        </h1>
    </div>
  );
};

export default ViewOrder;