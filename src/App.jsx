import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import ScrollToTop from "./components/Top";
import BackToTopButton from "./components/scrollToTop";
import PrivateRoute from "./components/PrivateRoute";

import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/Dashboard/Home";
import Bookings from "./pages/dashboard/Bookings";
import Customers from "./pages/dashboard/Customers";
import Gallery from "./pages/dashboard/Gallery";
import Settings from "./pages/dashboard/Settings";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <BackToTopButton />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="customers" element={<Customers />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
