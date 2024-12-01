import React, { useState } from "react";

const SignUp = ({ toggle }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted", formData);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 border border-gray-400 rounded"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border border-gray-400 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border border-gray-400 rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border border-gray-400 rounded"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-indigo-500 text-white px-8 py-3 rounded-full"
        >
          Sign Up
        </button>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => toggle()}
            className="text-indigo-500 hover:text-indigo-700"
          >
            Already have an account? Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
