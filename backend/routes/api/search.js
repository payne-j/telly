const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
const { Telly } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const results = await Telly.findAll({
      where: {
        name: {
          [Op.like]: `%${req}%`,
        },
        streetAddress: {
          [Op.like]: `%${req.body}%`,
        },
        city: {
          [Op.like]: `%${req.body}%`,
        },
        zip: {
          [Op.like]: `%${req.body}%`,
        },
        state: {
          [Op.like]: `%${req.body}%`,
        },
      },
    });
    res.json({ locations: req.body.location });
  })
);

module.exports = router;
