import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productSlice';

const ProductCard = ({ product, currentUser }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product._id));
    }
  };

  return (
    <div className="border rounded shadow-sm p-4 relative">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-gray-500">Price: ${product.price}</p>
      
      <Link to={`/products/${product._id}`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
          View Details
        </button>
      </Link>

      {product.sellerId === currentUser.data?._id && (
        <div className="absolute top-2 right-2">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="text-gray-500 hover:text-gray-700"
          >
            ⋮ 
          </button>
          {showOptions && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
              <Link
                to={`/edit-product/${product._id}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
