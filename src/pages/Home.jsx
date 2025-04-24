import Bg from "../assets/1.jpg";
import Bg2 from "../assets/3.jpg";
import { Link } from "react-router-dom";
import { FaUsers, FaCalendarCheck, FaImages } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const testimonials = [
    {
      name: "LensCraft Studio",
      text: "“This app has completely changed how I manage my studio. Client coordination and gallery delivery is now seamless.”",
    },
    {
      name: "GlowFrame Photography",
      text: "“Easy to use and my clients love the booking system. It's helped me appear more professional.”",
    },
    {
      name: "Focus & Snap",
      text: "“Highly recommend for any photography studio. It’s intuitive and saves me a lot of time every week.”",
    },
  ];

  function getInitials(name) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] md:h-[75vh] py-20 text-center text-white"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:pt-30">
            Manage Your <span className="text-[#41b883]">Studio</span> with Ease
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            Streamline bookings, manage clients, organize files, and grow your
            photography/studio business.
          </p>
          <Link
            to="/signup"
            className="bg-[#41b883] text-white px-6 py-3 rounded-md text-lg hover:bg-[#36a674] transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl text-[#41b883]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Management</h3>
            <p className="text-gray-600">
              Seamlessly manage all your client information in one place. Track
              communication history, preferences, past sessions, and contact
              details effortlessly, making it easier to build lasting
              relationships and provide personalized experiences.
            </p>
          </div>

          {/*Services Section*/}
          <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaCalendarCheck className="text-4xl text-[#41b883]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
            <p className="text-gray-600">
              Allow your clients to book sessions online at their convenience.
              Reduce back-and-forth communication and avoid scheduling conflicts
              with a system that keeps your calendar organized and your
              availability transparent.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaImages className="text-4xl text-[#41b883]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gallery & Delivery</h3>
            <p className="text-gray-600">
              Effortlessly deliver client galleries through secure online links.
              Enable your clients to view, download, and select their favorite
              shots anytime, while keeping your work organized and
              professionally presented.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="border border-gray-200 rounded-2xl p-8 text-center bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-2xl font-bold mb-4 text-[#41b883]">Free</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Access to basic tools</li>
              <li>Email support during business hours</li>
              <li>1 Client Project</li>
            </ul>
            <Link
              to="/signup"
              className="inline-block bg-[#41b883] text-white px-6 py-2 rounded-md hover:bg-[#36a674] transition"
            >
              Choose Plan
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-[#41b883] rounded-2xl p-8 text-center bg-[#f0fdf4] shadow-lg transform scale-105">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-2xl font-bold mb-4 text-[#41b883]">KES 999/mo</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>Everything in Starter</li>
              <li>Unlimited online bookings</li>
              <li>Secure client gallery</li>
              <li>Automated reminders</li>
            </ul>
            <Link
              to="/signup"
              className="inline-block bg-[#41b883] text-white px-6 py-2 rounded-md hover:bg-[#36a674] transition"
            >
              Choose Plan
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-2xl p-8 text-center bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-2xl font-bold mb-4 text-[#41b883]">
              KES 2499/mo
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>All Pro features</li>
              <li>Team collaboration tools</li>
              <li>Priority support & SLA</li>
              <li>Custom onboarding</li>
            </ul>
            <Link
              to="/signup"
              className="inline-block bg-[#41b883] text-white px-6 py-2 rounded-md hover:bg-[#36a674] transition"
            >
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

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mb-2 p-6 rounded-xl shadow-md text-center h-full flex flex-col justify-between">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-14 h-14 bg-[#41b883] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {getInitials(item.name)}
                  </div>
                  <p className="text-gray-600 italic">
                    “{item.text.replace(/“|”/g, "")}”
                  </p>
                </div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#41b883] text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-white/90">
            Subscribe to our newsletter and receive exclusive tips, tools, and
            updates to help you manage your studio like a pro.
          </p>

          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FaEnvelope className="text-[#41b883] text-xl" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md text-gray-800 focus:outline-none border border-gray-300 w-full"
              />
            </div>
            <button className="bg-[#41b883] text-white px-6 py-2 rounded-md font-medium hover:bg-[#36a674] transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-white/80 mt-4">
            No spam. Just helpful content and updates.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
          {/* Image side */}
          <img
            src={Bg2}
            alt="Studio workspace"
            className="rounded-lg shadow-md w-full h-auto"
          />

          {/* Text side */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Ready to simplify your studio workflow?
            </h2>
            <p className="text-gray-600 mb-6">
              Join other successful studios and manage your bookings, clients,
              and gallery all in one platform.
            </p>
            <Link
              to="/signup"
              className="bg-[#41b883] text-white px-6 py-3 rounded-md text-lg hover:bg-[#36a674] transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
