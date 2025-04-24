import React from "react";

const Settings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#41b883]">Settings</h2>

      {/* Studio Info */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-[#41b883]">
          Studio Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Studio Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#41b883] focus:ring-[#41b883]"
              placeholder="e.g. BrightLens Studios"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#41b883] focus:ring-[#41b883]"
              placeholder="e.g. 0700123456"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#41b883] focus:ring-[#41b883]"
              placeholder="e.g. Homa Bay Town, Kenya"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-4 text-[#41b883]">
          Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Enable Dark Mode</span>
            <input type="checkbox" className="accent-[#41b883] w-5 h-5" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Email Notifications</span>
            <input type="checkbox" className="accent-[#41b883] w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-[#41b883]">
          Account Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#41b883] focus:ring-[#41b883]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Change Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-[#41b883] focus:ring-[#41b883]"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-[#41b883] text-white px-4 py-2 rounded hover:bg-[#369b6b]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
