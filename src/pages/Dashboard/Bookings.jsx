import React, { useState } from "react";
import { FaPlus, FaEye } from "react-icons/fa";
import BookingFormModal from "./BookingFormModal";
import BookingDetailsModal from "./BookingDetailsModal";

const sampleBookings = [
  {
    id: "B001",
    client: "Alice Wanjiku",
    date: "2025-05-03",
    location: "Studio 1",
    deposit: 1000,
    balance: 2000,
    total: 3000,
    purpose: "Wedding shoot",
  },
  {
    id: "B002",
    client: "Brian Otieno",
    date: "2025-05-05",
    location: "Kisumu",
    deposit: 500,
    balance: 1500,
    total: 2000,
    purpose: "Outdoor graduation",
  },
];

const Bookings = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [viewingBooking, setViewingBooking] = useState(null);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Upcoming Bookings</h2>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
        >
          <FaPlus /> New Booking
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="p-4">Booking ID</th>
              <th className="p-4">Client</th>
              <th className="p-4">Date</th>
              <th className="p-4">Location</th>
              <th className="p-4">Deposit</th>
              <th className="p-4">Balance</th>
              <th className="p-4">Total</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleBookings.map((booking) => (
              <tr key={booking.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{booking.id}</td>
                <td className="p-4">{booking.client}</td>
                <td className="p-4">{booking.date}</td>
                <td className="p-4">{booking.location}</td>
                <td className="p-4">{booking.deposit}</td>
                <td className="p-4">{booking.balance}</td>
                <td className="p-4">{booking.total}</td>
                <td className="p-4">
                  <button
                    onClick={() => setViewingBooking(booking)}
                    className="text-blue-600 hover:text-blue-800"
                    title="View Booking"
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Create Modal */}
      {isCreateModalOpen && (
        <BookingFormModal onClose={() => setCreateModalOpen(false)} />
      )}

      {/* Booking View Modal */}
      {viewingBooking && (
        <BookingDetailsModal
          booking={viewingBooking}
          onClose={() => setViewingBooking(null)}
        />
      )}
    </div>
  );
};

export default Bookings;
