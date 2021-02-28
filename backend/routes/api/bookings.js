const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Booking, Telly, User } = require("../../db/models");

const bookingNotFound = (bookingId) => {
  const err = Error(`Booking with an id of ${bookingId} could not be found`);
  err.title = "Tweet not found";
  err.status = 404;
  return err;
};

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
      include: [Telly, User],
      order: [["startDate", "DESC"]],
    });
    res.json({ booking: results });
  })
);

router.delete(
  "/cancel/:bookingId",
  asyncHandler(async (req, res) => {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findByPk(bookingId);
    if (booking) {
      await booking.destroy();
      res.status(204).end();
    } else {
      next(bookingNotFound(booking));
    }
  })
);

module.exports = router;
