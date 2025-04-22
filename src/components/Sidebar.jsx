import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6">Studio Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard" end>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/bookings">Bookings</NavLink>
        <NavLink to="/dashboard/customers">Customers</NavLink>
        <NavLink to="/dashboard/gallery">Gallery</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
