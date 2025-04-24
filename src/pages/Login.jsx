import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500">
          Log in to manage your <span className="text-[#41b883]">studio</span>
        </p>

        {error && <div className="text-red-600 text-center py-2">{error}</div>}

        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-[#41b883] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#41b883] text-white py-2 rounded-lg font-medium hover:bg-[#36a674] transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#41b883] hover:underline">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
