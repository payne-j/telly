"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let sender = faker.random.number({
      min: 11,
      max: 100,
    });

    let recipient = faker.random.number({
      min: 2,
      max: 10,
    });

    const subjectNum = faker.random.number({
      min: 0,
      max: 5,
    });
    const messageNum = faker.random.number({
      min: 0,
      max: 15,
    });

    const subjects = [
      "Questions",
      "Hello",
      "About my upcoming stay",
      "Reservation question",
      "Telly question",
      "Question about accommodations",
    ];

    const messages = [
      "What safety measures does the Telly have?",
      "Who has access to the accommodation?",
      "Are toiletries provided?",
      "What is the noise level like in the area, and are there any special events happening during your stay that may affect it?",
      "What do you usually suggest to your guests in terms of where to eat, what to do, what to avoid?",
      "Do you charge pet boarding fees?",
      "What is in the fridge that’s off-limits?",
      "Do shoes come off when guest enter?",
      "Any particular house quirks?",
      "Any specific instructions for the bathroom?",
      "What should guests do with the sheets on check-out day?",
      "When is check-in & check-out time?",
      "Is an early/late check-in/check-out possible?",
      "Who lives in the residence / how many people is it shared with?",
      "Are snacks & refreshments provided?",
      "What is usable in the linen closet?",
    ];

    const userMessages = () => {
      const messageSeeds = [
        {
          subject: subjects[subjectNum],
          body: messages[messageNum],
          senderId: 1,
          recipientId: recipient,
        },
      ];
      for (let i = 0; i < 50; i++) {
        let randomMessage = {
          subject: subjects[subjectNum],
          body: messages[messageNum],
          senderId: sender,
          recipientId: recipient,
        };
        messageSeeds.push(randomMessage);
      }
      return messageSeeds;
    };

    return queryInterface.bulkInsert("Messages", userMessages(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
