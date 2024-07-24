// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = () => {
  return (
    <div>
      <div className="max-w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/bookings">
          <h5 className="mb-2 text-2xl px-4 font-bold tracking-tight text-gray-900 dark:text-white">
            LT1
          </h5>
        </a>
        <a
          href="/bookings"
          type="submit"
          className="inline-flex items-baseline px-4 py-2 my-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
