import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'; 
import ForgotPassword from './components/ForgotPassword'; 
import './index.css'; 

const App = () => {
  return (
    <CartProvider>
      <Router basename="/My_Grocery_Store_Website"> {/* Update this line */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
