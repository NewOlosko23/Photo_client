import React from "react";
import {
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaCamera,
  FaEdit,
  FaMoneyBill,
} from "react-icons/fa";

const Home = () => {
  const currentDate = new Date().toLocaleString();

  // Stats Mock Data
  const stats = {
    customersThisWeek: 27,
    filesCompleted: 58,
    filesPending: 14,
    amountPaid: 23400,
    amountDue: 8700,
  };

  // Activities Mock Data
  const todayActivities = [
    {
      time: "10:00 AM",
      type: "shoot",
      description: "Outdoor shoot with Mercy Otieno",
    },
    {
      time: "12:00 PM",
      type: "edit",
      description: "Edit images for Brian and Diana",
    },
    {
      time: "2:00 PM",
      type: "shoot",
      description: "Studio shoot for Peter Kimani",
    },
    {
      time: "4:30 PM",
      type: "payment",
      description: "Receive balance payment from Ann Wanjiku",
    },
  ];

  const iconMap = {
    shoot: <FaCamera className="text-[#41b883]" />,
    edit: <FaEdit className="text-yellow-500" />,
    payment: <FaMoneyBill className="text-indigo-500" />,
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to Studio Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
          <FaClock className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Current Date & Time</p>
            <p className="font-semibold">{currentDate}</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
          <FaUsers className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Customers This Week</p>
            <p className="font-semibold text-lg">{stats.customersThisWeek}</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
          <FaCheckCircle className="text-emerald-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Files Completed</p>
            <p className="font-semibold text-lg">{stats.filesCompleted}</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
          <FaTimesCircle className="text-red-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Files Pending</p>
            <p className="font-semibold text-lg">{stats.filesPending}</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
          <FaMoneyBillWave className="text-indigo-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Amount Paid</p>
            <p className="font-semibold text-lg">
              KES {stats.amountPaid.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
          <FaMoneyCheckAlt className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-gray-600 text-sm">Amount Due</p>
            <p className="font-semibold text-lg">
              KES {stats.amountDue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-200 my-6" />

      {/* Today’s Activities */}
      <div>
        <h2 className="text-xl font-semibold text-[#41b883] mb-4">
          Today’s Activities
        </h2>
        <div className="space-y-3">
          {todayActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 rounded-lg flex items-start gap-4"
            >
              <div className="text-2xl">{iconMap[activity.type]}</div>
              <div>
                <p className="font-semibold">{activity.time}</p>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
