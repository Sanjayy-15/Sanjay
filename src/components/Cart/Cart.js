// src/pages/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.0, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20.0, quantity: 2 }
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: Rs {item.price}</p>
              <p>
                Quantity:
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                  min="1" 
                />
              </p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <h2>Total: Rs {calculateTotal()}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
