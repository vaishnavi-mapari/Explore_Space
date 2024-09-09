// src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Login to OrbitX</h1>
      <form className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
