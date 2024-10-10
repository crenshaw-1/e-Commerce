import axios from 'axios';

const API_URL = 'https://5000-crenshaw1-ecommerce-f368xunkclu.ws-eu116.gitpod.io/api/v1/products/';

const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, productData, config);
  return response.data;
};

const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const updateProduct = async (id, productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, productData, config);
  return response.data;
};

const deleteProduct = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};

export default productService;