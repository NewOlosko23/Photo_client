import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const customers = [
  {
    id: "C001",
    name: "John Doe",
    phone: "0700123456",
    email: "john@example.com",
    total: 2500,
    paid: 1500,
    balance: 1000,
    status: "incomplete",
  },
  {
    id: "C002",
    name: "Mary Atieno",
    phone: "0711222333",
    email: "mary@example.com",
    total: 3000,
    paid: 3000,
    balance: 0,
    status: "complete",
  },
  {
    id: "C003",
    name: "Kevin Otieno",
    phone: "0722445566",
    email: "kevin@example.com",
    total: 3500,
    paid: 1500,
    balance: 2000,
    status: "defaulted",
  },
];

const getStatusBadge = (status) => {
  const base = "px-2 py-1 rounded-full text-xs font-semibold ";
  switch (status) {
    case "complete":
      return (
        <span className={base + "bg-green-100 text-green-700"}>Complete</span>
      );
    case "incomplete":
      return (
        <span className={base + "bg-yellow-100 text-yellow-700"}>
          Incomplete
        </span>
      );
    case "defaulted":
      return (
        <span className={base + "bg-red-100 text-red-700"}>Defaulted</span>
      );
    default:
      return (
        <span className={base + "bg-gray-100 text-gray-700"}>Unknown</span>
      );
  }
};

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openModal = (customer) => setSelectedCustomer(customer);
  const closeModal = () => setSelectedCustomer(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6">Customer Projects</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-4">Client</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Email</th>
              <th className="p-4">Paid (KES)</th>
              <th className="p-4">Balance (KES)</th>
              <th className="p-4">Total (KES)</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => openModal(c)}
              >
                <td className="p-4">{c.name}</td>
                <td className="p-4">{c.phone}</td>
                <td className="p-4">{c.email}</td>
                <td className="p-4">{c.paid.toLocaleString()}</td>
                <td className="p-4">{c.balance.toLocaleString()}</td>
                <td className="p-4">{c.total.toLocaleString()}</td>
                <td className="p-4">{getStatusBadge(c.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <FaTimes />
            </button>
            <h3 className="text-lg font-bold mb-4">Customer Info</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {selectedCustomer.name}
              </p>
              <p>
                <strong>Phone:</strong> {selectedCustomer.phone}
              </p>
              <p>
                <strong>Email:</strong> {selectedCustomer.email}
              </p>
              <p>
                <strong>Total:</strong> KES{" "}
                {selectedCustomer.total.toLocaleString()}
              </p>
              <p>
                <strong>Paid:</strong> KES{" "}
                {selectedCustomer.paid.toLocaleString()}
              </p>
              <p>
                <strong>Balance:</strong> KES{" "}
                {selectedCustomer.balance.toLocaleString()}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {getStatusBadge(selectedCustomer.status)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
