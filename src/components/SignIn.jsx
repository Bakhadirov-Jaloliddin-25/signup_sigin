import React from "react";

const SignIn = ({ toggle }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
      <form>
        <div className="relative mb-4">
          <input
            type="text"
            required
            className="w-full text-gray-700 bg-transparent border-b border-gray-400 py-2 text-lg outline-none focus:border-indigo-500"
          />
          <label className="absolute top-0 left-0 text-gray-500 text-lg transform transition-all duration-300">
            User Name
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            required
            className="w-full text-gray-700 bg-transparent border-b border-gray-400 py-2 text-lg outline-none focus:border-indigo-500"
          />
          <label className="absolute top-0 left-0 text-gray-500 text-lg transform transition-all duration-300">
            Password
          </label>
        </div>

        <div className="flex justify-center mb-6">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-8 py-3 rounded-full"
          >
            Sign In
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => toggle()}
            className="text-indigo-500 hover:text-indigo-700"
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
