import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <ProductList />
    </div>
  );
};

export default Home;
