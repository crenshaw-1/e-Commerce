import React from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../features/products/productSlice';
import ProductForm from '../components/ProductForm';

const CreateProduct = () => {
  const dispatch = useDispatch();

  const handleProductSubmit = (productData) => {
    dispatch(createProduct(productData));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <ProductForm onSubmit={handleProductSubmit} />
    </div>
  );
};

export default CreateProduct;
