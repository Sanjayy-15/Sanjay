// src/pages/Catalog.js
import React, { useState } from 'react';

const Catalog = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 },
    { id: 3, name: 'Product 3', price: 30.0 }
  ]);

  const handleAddToCart = (product) => {
    console.log('Add to Cart:', product);
    // You can add more functionality here such as updating the cart state or sending data to a server
  };

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: Rs {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
