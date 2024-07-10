// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Store</h1>
      <p>Discover the best products at unbeatable prices!</p>
      <div>
        <Link to="/catalog">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
