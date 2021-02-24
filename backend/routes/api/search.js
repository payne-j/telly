const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();

router.get("/", (req, res) => {
  const { location } = req;
  if (location) {
    return res.json({
      location,
    });
  } else return res.json({});
});

module.exports = router;
