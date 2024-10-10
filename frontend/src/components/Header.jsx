import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  console.log(user);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyApp</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
                
                {(user.data.role === 'seller' || user.data.role === 'admin') && (
                  <li><Link to="/create-product" className="hover:text-gray-300">Create Product</Link></li>
                )}

                {user.data.role === 'admin' && (
                  <>
                    <li><Link to="/admin/users" className="hover:text-gray-300">Manage Users</Link></li>
                    <li><Link to="/admin" className="hover:text-gray-300">Admin Dashboard</Link></li>
                  </>
                )}

                <li>
                  <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
