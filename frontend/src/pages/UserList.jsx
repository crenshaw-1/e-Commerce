import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser, updateUserRole } from '../features/users/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  const handleRoleChange = (id, newRole) => {
    dispatch(updateUserRole({ userId: id, role: newRole })).then(() => {
      dispatch(getUsers());
    });
  };
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul>
        {isLoading ? (
          <p>Loading users...</p>
        ) : (
          <>
            {users.map((user) => (
              <li key={user._id} className="flex justify-between items-center border-b py-2">
                <span>{user.username} - {user.email}</span>
                <div className="flex items-center gap-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="admin">Admin</option>
                    <option value="seller">Seller</option>
                    <option value="shopper">Shopper</option>
                  </select>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default UserList;
