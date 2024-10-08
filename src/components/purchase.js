import React from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import '../static/css/paymentEntry.css'

const Purchase = () => {
  const [order] = useState({
    buyQuantity: [0,0,0,0,0], credit_card_number: '', expiry_date: '', cvvCode: '',
    card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //console.log(order);
    navigate('/purchase/paymentEntry', {state:order});
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product 1: </label>
        <input 
          type="number"
          required
          min="0"
          style={{marginTop: '50px'}} // shifting the top text down
          onChange={(e) => {order.buyQuantity[0] = e.target.value;}}
        />
        <br/>
        <label>Product 2: </label>
        <input 
          type="number"
          required
          min="0"
          onChange={(e) => {order.buyQuantity[1] = e.target.value;}}
        />
        <br/>
        <label>Product 3: </label>
        <input 
          type="number"
          required
          min="0"
          onChange={(e) => {order.buyQuantity[2] = e.target.value;}}
        />
        <br/>
        <label>Product 4: </label>
        <input 
          type="number"
          required
          min="0"
          onChange={(e) => {order.buyQuantity[3] = e.target.value;}}
        />
        <br/>
        <label>Product 5: </label>
        <input 
          type="number"
          required
          min="0"
          onChange={(e) => {order.buyQuantity[4] = e.target.value;}}
        />
        <br/>
        <button style={{marginTop: '20px'}} className='button'>Pay</button>
      </form>
    </div>
  );
};

export default Purchase;