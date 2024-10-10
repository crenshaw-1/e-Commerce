import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, updateProduct } from '../features/products/productSlice';
import ProductForm from '../components/ProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setInitialData(product);
    }
  }, [product]);

  const handleProductSubmit = (productData) => {
    dispatch(updateProduct({ id, productData }));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      {initialData && <ProductForm onSubmit={handleProductSubmit} initialData={initialData} />}
    </div>
  );
};

export default EditProduct;
