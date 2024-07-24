// Booking.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Booking = ({ authToken }) => {
  const [hall, setHall] = useState("LT1");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("09:00-11:00");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/api/bookings",
        { hall, date, slot },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setMessage("Booking request is successful...!");
    } catch (error) {
      setMessage("Booking request failed..!");
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        LNMIIT{" "}
        <span className="text-blue-600 dark:text-blue-500">
          Hall Booking Portal
        </span>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>

      <form
        className="justify-items-center gap-10 rounded-md text-4xl"
        action="/bookings"
        onSubmit={handleSubmit}
      >
        <select value={hall} onChange={(e) => setHall(e.target.value)}>
          {[...Array(19).keys()].map((num) => (
            <option key={num} value={`LT${num + 1}`}>{`LT${num + 1}`}</option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <select
          className="max-w-min text-center justify-items-center bg-slate-500 rounded-md shadow-sm"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
        >
          <option value="09:00-11:00">09:00 - 11:00</option>
          <option value="11:00-13:00">11:00 - 13:00</option>
          <option value="14:00-16:00">14:00 - 16:00</option>
          <option value="16:00-18:00">16:00 - 18:00</option>
        </select>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Book
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

Booking.propTypes = {
  authToken: PropTypes.string.isRequired,
};

export default Booking;
