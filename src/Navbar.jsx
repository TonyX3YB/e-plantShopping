import React from 'react';
import { useCart } from './CartContext';
import './Navbar.css'; // Create the corresponding CSS file for Navbar

const Navbar = ({ setShowCartPage }) => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Paradise Nursery</h2>
      <button className="cart-icon" onClick={() => setShowCartPage(true)}>
        🛒 ({cartItems.length})
      </button>
    </nav>
  );
};

export default Navbar;
