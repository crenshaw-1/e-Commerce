import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../features/users/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { user: {data: profile}, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {isLoading ? (
        <p>Loading profile...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        profile && (
          <div className="border rounded shadow-sm p-4">
            <p><strong>Name:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Role:</strong> {profile.role}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Profile;
