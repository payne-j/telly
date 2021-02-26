const router = require("express").Router();
const sessionRouter = require("./session");
const usersRouter = require("./users");
const searchRouter = require("./search");
const bookingsRouter = require("./bookings");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/search", searchRouter);
router.use("/bookings", bookingsRouter);

module.exports = router;
