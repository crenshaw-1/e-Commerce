import React from 'react';
import ProductList from '../components/ProductList';
import UserList from './UserList';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      <section>
        <h3>User Management</h3>
        <UserList />
      </section>

      <section>
        <h3>Product Management</h3>
        <ProductList />
      </section>
    </div>
  );
};

export default AdminDashboard;
