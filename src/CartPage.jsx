import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
