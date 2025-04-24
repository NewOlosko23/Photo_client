import React from "react";

const BookingFormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">New Booking</h3>
        <form className="space-y-4">
          <input className="w-full border px-3 py-2 rounded" placeholder="Client Name" required />
          <input type="date" className="w-full border px-3 py-2 rounded" required />
          <input className="w-full border px-3 py-2 rounded" placeholder="Location" required />
          <input type="number" className="w-full border px-3 py-2 rounded" placeholder="Deposit" required />
          <input type="number" className="w-full border px-3 py-2 rounded" placeholder="Total" required />
          <textarea className="w-full border px-3 py-2 rounded" placeholder="Purpose / Notes"></textarea>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;
