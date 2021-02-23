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
        {
          firstName: "Sugarhill",
          lastName: "Gang",
          username: "bangbangboogie",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Irving",
          lastName: "Berlin",
          username: "ritzyritz",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Jack",
          lastName: "White",
          username: "white-stripes",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Rolling",
          lastName: "Stones",
          username: "rocknroll",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Ella",
          lastName: "Fitzgerald",
          username: "queenofjazz",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: avatar.giveMeAnAvatar(),
          passwordHash: password,
        },
        {
          firstName: "Chris",
          lastName: "Isaak",
          username: "loneyboy",
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
