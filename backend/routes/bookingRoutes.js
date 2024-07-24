const express = require("express");

const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const Booking = require("../models/Booking");

router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Error while featching bookings", error });
  }
});

router.post("/", protect, async (req, res) => {
  const { hall, date, slot, status } = req.body;

  try {
    const newBooking = new Booking({ hall, date, slot, status });
    const booking = await newBooking.save();
    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
});

router.put("/", protect, admin, async (req, res) => {
  const { id, status } = req.body;
  try {
    const booking = await Booking.findOneAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ message: "Eroor updating bookings", error });
  }
});

module.exports = router;
