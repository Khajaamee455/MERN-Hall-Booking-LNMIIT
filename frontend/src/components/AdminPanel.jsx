// AdminPanel.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AdminPanel = ({ authToken }) => {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/bookings", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setBookings(res.data.bookings);
      } catch (error) {
        setMessage("Failed to fetch bookings");
      }
    };

    fetchBookings();
  }, [authToken]);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        "http://localhost:3000/api/bookings",
        { id, status },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setMessage("Booking status updated ...!");
      setBookings(
        bookings.map((booking) =>
          booking._id === id ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      setMessage("Failed to update the booking status.");
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Admin
        </span>{" "}
        Controle Panel
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Admin can Accept or Reject the booking requests...
      </p>

      {message && <p>{message}</p>}

      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.hall} - {booking.date} - {booking.slot} - {booking.status}
            <button
              onClick={() => handleStatusChange(booking._id, "approved")}
              className="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Approved
            </button>
            <button
              onClick={() => handleStatusChange(booking._id, "Rejected")}
              className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Rejected
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

AdminPanel.propTypes = {
  authToken: PropTypes.string.isRequired,
};

export default AdminPanel;
