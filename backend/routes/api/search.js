const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
const { Telly, User, Review, Photo } = require("../../db/models");

//query for latest tellies
router.get(
  "/discover",
  asyncHandler(async (req, res) => {
    const results = await Telly.findAll({
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
    console.log("RESULTS________________", results)
    // const photos = await Photos.findAll
    res.json({ discoveries: results });
  })
);

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
  "/tellies/:tellyId",
  asyncHandler(async (req, res) => {
    const tellyId = req.params.tellyId;
    const results = await Telly.findOne({
      where: {
        id: tellyId,
      },
      include: [User, Photo],
    });
    res.json({ tellyId: results });
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
