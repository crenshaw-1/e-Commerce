import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ roles, component: Component }) => {
  const { user } = useSelector((state) => state.auth);

  console.log(user)

  if (!user) {
    return <Navigate to='/login' />;
  }

  if (roles && !roles.includes(user.data.role)) {
    return <Navigate to='/' />;
  }

  return <Component />;
};

export default PrivateRoute;
