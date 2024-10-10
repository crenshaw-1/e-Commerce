import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    price: initialData.price || '',
    quantity: initialData.quantity || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', price: '', quantity: '' });

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="border rounded px-4 py-2 w-full"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Product Description"
        className="border rounded px-4 py-2 w-full"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="border rounded px-4 py-2 w-full"
        required
      />
        <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
         placeholder="Quantity"
        className="w-full p-2 border rounded"
        required
        />
      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
