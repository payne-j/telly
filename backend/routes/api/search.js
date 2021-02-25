const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
const { Telly, User, Review, Photo } = require("../../db/models");

//autofill query for searchbar
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

//Query for single telly
router.get(
  "/tellies/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const results = await Telly.findOne({
      where: {
        id,
      },
      include: [User, Photo],
    });
    res.json({ id: results });
  })
);
//Query for location list match from search
router.get(
  "/:location/:startDate/:endDate/:guests",
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
