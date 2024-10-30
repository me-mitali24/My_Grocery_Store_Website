// src/components/Login.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-login relative flex items-center justify-center min-h-screen">
      <div className="absolute top-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold">Welcome to Our Grocery Family!</h1>
        <p className="mt-2">Login or Signup to join us!</p>
      </div>
      <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md z-10">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email/Username
            </label>
            <input
              type="text"
              id="email"
              required
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email or username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-sm text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
