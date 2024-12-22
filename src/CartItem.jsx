// File: CartItem.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onCheckoutShopping }) => {
  // Get cart items from the Redux store
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + item.cost * item.quantity, 0)
      .toFixed(2); // Return the total in a fixed decimal format
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping && typeof onContinueShopping === 'function') {
      onContinueShopping(); // Navigate back to plant listing
    }
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    if (onCheckoutShopping && typeof onCheckoutShopping === 'function') {
      onCheckoutShopping(); // Proceed to checkout
    }
  };

  const handleIncrement = (item) => {
    // Increment the quantity by 1 and update the Redux store
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      // Decrement the quantity by 1 and update the Redux store
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // If quantity is 1, remove the item from the cart
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    // Dispatching the removeItem action to remove the item from the cart
    dispatch(removeItem(item));
  };

  // Calculate total cost for a specific item (Subtotal)
  const calculateTotalCost = (item) => {
    // Subtotal is calculated by multiplying the unit cost by the quantity of the item
    return (item.cost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              {/* Displaying the subtotal for the item */}
              <div className="cart-item-total">
                Subtotal: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)} // Calls handleRemove to remove the item
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
