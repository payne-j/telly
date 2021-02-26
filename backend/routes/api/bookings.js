const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Booking } = require("../../db/models");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {userId, tellyId, startDate, endDate, total} = req.body;
    const booking = await Booking.create({
      userId,
      tellyId,
      startDate,
      endDate,
      total
    });
    res.status(201).json({ booking });
  })
);
module.exports = router;
