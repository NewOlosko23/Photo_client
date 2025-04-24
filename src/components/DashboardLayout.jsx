import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-gray-50 ml-64">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
