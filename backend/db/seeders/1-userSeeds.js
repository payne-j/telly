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
          profileImage:
            "http://www.donhenleyonline.com/images/DHenleyOOTNSB01.jpg",
          passwordHash: password,
        },
        {
          firstName: "Barry",
          lastName: "Manilow",
          username: "barry",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://i1.sndcdn.com/avatars-000296314441-s7pm8i-t240x240.jpg",
          passwordHash: password,
        },
        {
          firstName: "Elvis",
          lastName: "Presley",
          username: "the-king",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage: "https://avatarfiles.alphacoders.com/716/71639.jpg",
          passwordHash: password,
        },
        {
          firstName: "Sugarhill",
          lastName: "Gang",
          username: "bangbangboogie",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://img2.grunge.com/img/gallery/the-untold-truth-of-the-sugarhill-gang/l-intro-1600102253.jpg",
          passwordHash: password,
        },
        {
          firstName: "Irving",
          lastName: "Berlin",
          username: "ritzyritz",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://i.pinimg.com/originals/3d/ed/46/3ded46672f467948fc20d1dad562ff3c.jpg",
          passwordHash: password,
        },
        {
          firstName: "Jack",
          lastName: "White",
          username: "white-stripes",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://i1.sndcdn.com/avatars-000009981570-mgdh0c-t500x500.jpg",
          passwordHash: password,
        },
        {
          firstName: "Rolling",
          lastName: "Stones",
          username: "rocknroll",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://popnable.com/images/singers/large/the_rolling_stones_united_kingdom_top_50_232.jpeg",
          passwordHash: password,
        },
        {
          firstName: "Ella",
          lastName: "Fitzgerald",
          username: "queenofjazz",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNTIyNTA2NzY2/ella-fitzgerald-9296210-1-402.jpg",
          passwordHash: password,
        },
        {
          firstName: "Chris",
          lastName: "Isaak",
          username: "loneyboy",
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
          profileImage:
            "https://lastfm.freetls.fastly.net/i/u/300x300/087f1f97f15c9fcef9c74bb5fe58b33c.jpg",
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
