const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Booking } = require("../../db/models");

router.post(
  "/:tellyId/:startDate/:endDate/:userId",
  asyncHandler(async (req, res) => {
    const { tellyId } = req.params.tellyId;
    const { startDate } = req.params.startDate;
    const { endDate } = req.params.endDate;
    const { userId } = req.params.userId;

    const booking = await Booking.create({
      userId,
      tellyId,
      startDate,
      endDate,
    });
    res.status(201).json({ booking });
  })
);
module.exports = router;
