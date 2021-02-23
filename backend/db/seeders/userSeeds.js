"use strict";
const faker = require("faker");
const avatar = require("give-me-an-avatar");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("password", 10);
    const users = () => {
      const userSeeds = [
        {
          firstName: "Demo",
          lastName: "User",
          username: "Demo-lition",
          email: "demo@user.io",
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Don",
          lastName: "Henley",
          username: "Eagles",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Barry",
          lastName: "Manilow",
          username: "barry",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Elvis",
          lastName: "Presley",
          username: "the-king",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
      ];

      for (let i = 0; i < 100; i++) {
        let randomUser = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        };
        userSeeds.push(randomUser);
      }
      return userSeeds;
    };
    return queryInterface.bulkInsert("Users", users(), {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        //only removes demo users (above) on 'down' command
        username: { [Op.in]: ["Demo-lition"] },
      },
      {}
    );
  },
};
