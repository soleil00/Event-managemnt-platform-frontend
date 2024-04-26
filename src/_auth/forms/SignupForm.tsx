import React from "react";

export const SignupForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create an account</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-bold mb-2"
          >
            Confirm Password*
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            // value={formData.confirmPassword}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            // onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
