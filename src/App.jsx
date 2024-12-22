import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartPage from './CartPage';
import { CartProvider } from './CartContext'; // Import the Cart Context

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCartPage, setShowCartPage] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar setShowCartPage={setShowCartPage} />
        
        {/* Landing Page */}
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>

        {/* Cart Page */}
        {showCartPage && <CartPage />}
      </div>
    </CartProvider>
  );
}

export default App;
