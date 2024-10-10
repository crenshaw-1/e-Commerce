import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUserRole, getUsers } from '../features/users/userSlice';

const UserRole = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [role, setRole] = useState('');

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const user = users.find((u) => u._id === id);

  const handleRoleUpdate = () => {
    if (role) {
      dispatch(updateUserRole({ userId: id, role }));
      alert(`User role updated to ${role}`);
    } else {
      alert('Please select a role before submitting.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update User Role</h2>
      {user ? (
        <>
          <p className="mb-2">User: <strong>{user.name}</strong> - Current Role: <strong>{user.role}</strong></p>
          <div className="flex items-center gap-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-4 py-2"
            >
              <option value="">Select New Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
            <button
              onClick={handleRoleUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Role
            </button>
          </div>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserRole;
