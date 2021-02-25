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
            [Op.iLike]: `%${location}%`,
          },
          streetAddress: {
            [Op.iLike]: `%${location}%`,
          },
          city: {
            [Op.iLike]: `%${location}%`,
          },
          zip: {
            [Op.iLike]: `%${location}%`,
          },
          state: {
            [Op.iLike]: `%${location}%`,
          },
        },
      },
    });
    res.json({ location: results });
  })
);
router.get(
  "/:location#:startDate#:endDate#:guests",
  asyncHandler(async (req, res) => {
    const location = req.params.location;
    const results = await Telly.findAll({
      where: {
        [Op.or]: {
          name: {
            [Op.iLike]: `%${location}%`,
          },
          streetAddress: {
            [Op.iLike]: `%${location}%`,
          },
          city: {
            [Op.iLike]: `%${location}%`,
          },
          zip: {
            [Op.iLike]: `%${location}%`,
          },
          state: {
            [Op.iLike]: `%${location}%`,
          },
        },
      },
    });
    res.json({ location: results });
  })
);

module.exports = router;
