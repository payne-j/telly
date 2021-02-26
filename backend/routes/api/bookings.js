const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Telly, User, Review, Photo } = require("../../db/models");

router.post(
  "/:tellyId/:startDate/:endDate/:userId",
  asyncHandler(async (req, res) => {
    const { tellyId } = req.params.tellyId;
    const { startDate } = req.params.startDate;
    const { endDate } = req.params.endDate;
    const { userId } = req.params.userId;
    console.log("HERE:");

    const booking = await Booking.create({
      tellyId,
      startDate,
      endDate,
      userId,
    });
    console.log("BOOKING:", booking);
    res.status(201).json({ booking });
  })
);
module.exports = router;
