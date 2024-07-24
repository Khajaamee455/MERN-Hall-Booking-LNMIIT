const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  hall: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  slot: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    defulat: "Pending",
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
