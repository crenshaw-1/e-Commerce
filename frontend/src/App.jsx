import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import ProductDetails from './pages/ProductDetails';
import UserList from './pages/UserList';
import UserRole from './pages/UserRole';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container mx-auto px-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path="/admin" element={<PrivateRoute roles={['admin']} component={AdminDashboard}/>} />
            <Route
              path='/create-product'
              element={<PrivateRoute roles={['seller', 'admin']} component={CreateProduct} />}
            />
            <Route
              path='/edit-product/:id'
              element={<PrivateRoute roles={['seller', 'admin']} component={EditProduct} />}
            />
            <Route
              path='/admin/users'
              element={<PrivateRoute roles={['admin']} component={UserList} />}
            />
            <Route
              path='/admin/user-role/:id'
              element={<PrivateRoute roles={['admin']} component={UserRole} />}
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
