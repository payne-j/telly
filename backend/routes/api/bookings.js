const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Booking, Telly } = require("../../db/models");

router.post(
  "/create",
  asyncHandler(async (req, res) => {
    const { userId, tellyId, startDate, endDate, total } = req.body;
    const booking = await Booking.create({
      userId,
      tellyId,
      startDate,
      endDate,
      total,
    });
    res.status(201).json({ booking });
  })
);

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const results = await Booking.findAll({
      where: { userId },
      include: Telly,
    });
    res.json({ booking: results });
  })
);

module.exports = router;
