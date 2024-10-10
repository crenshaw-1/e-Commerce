import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../features/products/productSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading product details...</p>
      ) : (
        product && (
          <>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-gray-500">Price: ${product.price}</p>
            <p className="text-gray-500">Quantity: {product.quantity}</p>
          </>
        )
      )}
    </div>
  );
};

export default ProductDetails;
