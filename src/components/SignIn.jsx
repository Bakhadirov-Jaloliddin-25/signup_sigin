import React, { useState } from "react";

const SignIn = ({ toggle }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Welcome Back!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none ${
              errors.username
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">{errors.username}</p>
          )}
        </div>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none ${
              errors.password
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-400"
            }`}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
        >
          Sign In
        </button>
        <p
          onClick={() => toggle("signUp")}
          className="text-blue-500 hover:text-blue-700 text-center cursor-pointer mt-4"
        >
          Don't have an account? Sign Up
        </p>
      </form>
    </div>
  );
};

export default SignIn;
