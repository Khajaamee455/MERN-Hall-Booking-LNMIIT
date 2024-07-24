// eslint-disable-next-line no-unused-vars
import React from "react";
import lnmiit from "../assets/lnmiit.jpg";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              HALL BOOKING PORTAL OF{" "}
              <span className="text-pink-500">LNMIIT</span>
            </h1>
            <p className="text-sm md:text-xl">
              LNM Institute Of Information Technology .....! Hall booking portal
              of LNMIIT jaipur ...!!!
            </p>
          </div>
          <button className="text-white mt-8 bg-green-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Book now
          </button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={lnmiit}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
