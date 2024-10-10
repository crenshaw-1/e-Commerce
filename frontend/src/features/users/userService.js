import axios from 'axios';

const API_URL = 'https://5000-crenshaw1-ecommerce-f368xunkclu.ws-eu116.gitpod.io/api/v1/users/';

const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'profile', config);
  return response.data;
};

const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'all', config);
  console.log(response.data)
  return response.data;
};

const updateUserRole = async (userId, role, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(API_URL + userId + '/role', { role }, config);
  return response.data;
};

const deleteUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + id, config);
  return response.data;
};

const userService = {
  getProfile,
  getUsers,
  updateUserRole,
  deleteUser
};

export default userService;