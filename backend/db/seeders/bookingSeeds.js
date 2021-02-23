"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let user = faker.random.number({
      min: 11,
      max: 100,
    });
    let telly = faker.random.number({
      min: 1,
      max: 9,
    });
    let total = faker.random.number({
      min: 250,
      max: 2500,
    });
    const addDays = (date, days) => {
      const newDate = new Date(Number(date))
      newDate.setDate(date.getDate() + days)
      return newDate
    }

    const date = new Date();
    const newDate = addDays(date, 10);


    const daysAhead = Math.round(Math.random() * 15.5) + 1;
    const startDate = addDays(date , daysAhead);
    const lengthOfStay = Math.round(Math.random() * 5.5) + 1;
    const endDate = addDays(startDate, lengthOfStay);

    const bookings = () => {

      const bookingSeeds = [
        {
          userId: 1,
          tellyId: telly,
          startDate: "2021-07-22",
          endDate: "2021-07-29",
          total: total,
        },
        {
          userId: 1,
          tellyId: telly,
          startDate: "2021-03-18",
          endDate: "2021-03-21",
          total: total,
        },
        {
          userId: 1,
          tellyId: telly,
          startDate: "2020-02-12",
          endDate: "20-02-29",
          total: total,
        },
      ],
      for (let i = 0; i < 50; i++) {
        let randomBooking = {
          userId: user,
          tellyId: telly,
          startDate: startDate,
          endDate: endDate,
          total: total,

        };
        bookingSeeds.push(randomBooking);
      }
      return bookingSeeds;

    }

    return queryInterface.bulkInsert("Bookings", bookings(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
