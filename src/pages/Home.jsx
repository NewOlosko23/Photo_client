import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Manage Your <span className="text-[#41b883]">Studio</span> with Ease
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Streamline bookings, manage clients, organize files, and grow your photography/studio 
            business.
          </p>
          <Link
            to="/signup"
            className="bg-[#41b883] text-white px-6 py-3 rounded-md text-lg hover:bg-[#36a674] transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Client Management</h3>
            <p className="text-gray-600">
              Organize all your clients in one place with detailed history.
            </p>
          </div>
          <div className="shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
            <p className="text-gray-600">
              Let your clients schedule appointments online anytime.
            </p>
          </div>
          <div className="shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Gallery & Delivery</h3>
            <p className="text-gray-600">
              Share client galleries easily with secure online access.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-2xl font-bold mb-4">Free</p>
            <ul className="text-gray-600 mb-4">
              <li>Basic Features</li>
              <li>Email Support</li>
            </ul>
            <Link to="/signup" className="text-[#41b883] hover:underline">
              Choose Plan
            </Link>
          </div>
          <div className="border rounded-lg p-6 text-center bg-[#f0fdf4]">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-2xl font-bold mb-4">KES 999/mo</p>
            <ul className="text-gray-600 mb-4">
              <li>All Starter Features</li>
              <li>Online Bookings</li>
              <li>Client Gallery</li>
            </ul>
            <Link to="/signup" className="text-[#41b883] hover:underline">
              Choose Plan
            </Link>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-2xl font-bold mb-4">KES 2499/mo</p>
            <ul className="text-gray-600 mb-4">
              <li>All Pro Features</li>
              <li>Team Access</li>
              <li>Priority Support</li>
            </ul>
            <Link to="/signup" className="text-[#41b883] hover:underline">
              Choose Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Studios Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              “This app has completely changed how I manage my studio!”
            </p>
            <h4 className="font-semibold">LensCraft Studio</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              “Easy to use and my clients love the booking system.”
            </p>
            <h4 className="font-semibold">GlowFrame Photography</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              “Highly recommend for any photography studio!”
            </p>
            <h4 className="font-semibold">Focus & Snap</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#41b883] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for updates and tips on managing your
            studio.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded border-2 w-full sm:w-auto text-gray-800 focus:outline-none"
            />
            <button className="bg-white text-[#41b883] px-6 py-2 rounded font-medium hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center py-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to simplify your studio workflow?
        </h2>
        <Link
          to="/signup"
          className="bg-[#41b883] py-2 text-white px-6 py-3 rounded-md text-lg hover:bg-[#36a674] transition"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
