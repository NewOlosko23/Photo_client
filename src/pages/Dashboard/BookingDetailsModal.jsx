import React from "react";

const BookingDetailsModal = ({ booking, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h3 className="text-lg font-bold mb-4">Booking Details</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Client:</strong> {booking.client}
          </li>
          <li>
            <strong>Date:</strong> {booking.date}
          </li>
          <li>
            <strong>Location:</strong> {booking.location}
          </li>
          <li>
            <strong>Purpose:</strong> {booking.purpose}
          </li>
          <li>
            <strong>Deposit:</strong> KES {booking.deposit}
          </li>
          <li>
            <strong>Balance:</strong> KES {booking.balance}
          </li>
          <li>
            <strong>Total:</strong> KES {booking.total}
          </li>
        </ul>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
