const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
const { Telly } = require("../../db/models");

router.get(
  "/:location",
  asyncHandler(async (req, res) => {
    const location = req.params.location;
    const results = await Telly.findAll({
      where: {
        [Op.or]: {
          name: {
            [Op.substring]: `%${location}%`,
          },
          streetAddress: {
            [Op.substring]: `%${location}%`,
          },
          city: {
            [Op.substring]: `%${location}%`,
          },
          zip: {
            [Op.substring]: `%${location}%`,
          },
          state: {
            [Op.substring]: `%${location}%`,
          },
        },
      },
    });
    res.json({ location: results });
  })
);

module.exports = router;
