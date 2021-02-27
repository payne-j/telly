const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// const { userBookings } = require("../../../frontend/src/store/booking");
const { Booking } = require("../../db/models");

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

// router.get(
//   "/:userId",
//   asyncHandler(async (req, res) => {
//     const userId = req.params.userId;
//     const results = await userBookings.findAll({
//       where: { userId },
//     });
//     console.log(results);
//     res.json({ booking: results });
//   })
// );

module.exports = router;
