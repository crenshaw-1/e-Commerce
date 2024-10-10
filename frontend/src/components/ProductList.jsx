import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} currentUser={currentUser} />
        ))
      )}
    </div>
  );
};

export default ProductList;
