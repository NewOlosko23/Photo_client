import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [studioName, setStudioName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuth();

  const validatePassword = (pwd) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      return setError("Passwords do not match.");
    }

    if (!validatePassword(password)) {
      setLoading(false);
      return setError(
        "Password must contain letter, number, special char, and be at least 8 characters."
      );
    }

    try {
      const response = await axios.post(
        "https://photo-server-f6ip.onrender.com/api/auth/register",
        {
          studioName,
          email,
          phone,
          password,
          subscriptionType: "trial",
        }
      );

      if (response.data.success) {
        const {
          token,
          _id,
          studioName,
          email,
          phone,
          subscribed,
          subscriptionType,
        } = response.data.data;

        const user = {
          _id,
          studioName,
          email,
          phone,
          subscribed,
          subscriptionType,
        };

        signup(token, user);

        setLoading(false);
        navigate("/dashboard");
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account 🎉
        </h2>
        <p className="text-center text-gray-500">
          Start managing your <span className="text-[#41b883]">studio</span>
        </p>

        {error && (
          <div className="text-sm text-red-600 font-medium text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Studio Name
            </label>
            <input
              type="text"
              value={studioName}
              onChange={(e) => setStudioName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="e.g. DreamLens Studios"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="e.g. +254712345678"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Create Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="Create a strong password"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters and include a letter, number, and
              special character.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41b883]"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#41b883] text-white py-2 rounded-lg font-medium hover:bg-[#36a674] transition"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#41b883] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
