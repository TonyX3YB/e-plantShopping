// File: Cart.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem'; // Import the CartItem component
import './Cart.css';

const Cart = ({ onContinueShopping, onCheckoutShopping }) => {
  const cart = useSelector((state) => state.cart.items);

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + item.cost * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {/* Render CartItems */}
      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.name}
              item={item}
              onContinueShopping={onContinueShopping}
              onCheckoutShopping={onCheckoutShopping}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={onCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
