"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let user = faker.random.number({
      min: 11,
      max: 100,
    });
    let rating = faker.random.number({
      min: 0,
      max: 5,
    });
    const commentNum = faker.random.number({
      min: 0,
      max: 15,
    });
    const bookingId = faker.random.number({
      min: 1,
      max: 50,
    });
    const comments = [
      "I chose this hotel due to location and how nice it looked. I really enjoyed my stay, rooms were spacious considering. There was a bit of construction going on around the hotel so it had a net during our stay. Staff was very friendly and welcome and the bar tender showed us different areas around the city we could eat at which we truly enjoyed. The only negative was there there is not much night life or very attractive to young travels. Overall it was a good stay and enjoyed ourselves.",
      "When we arrived I booked a king bed & they gave me two full beds...super romantic right? The toilet was broken & my partner had to fix it 3 times. No breakfast. Overall v unsatisfied with my stay here would not stay here again. The location was nice tho.",
      "Stay their 2 weeks ago , staff was outstanding 👏 they made my family feel special and always greet us by the last name , they send a champagne for my son bday , room were nice and clean AC and heater works",
      "Beautiful and clean property with a reasonable price.",
      "Booked here for a week and had a fantastic experience. From the second I arrived, the staff was very friendly and provided extra assistance.",
      "They all have complete room facilities and the room is so relaxing. The staff spoke decent English and was very polite and explained the facilities available such as free daily entry to the onsen next door as well as priority access plus low-cost rooms. Thanks for the excellent service!",
      "Our stay at this hotel was really good! We had a room on the 18th floor, and it was new, beautiful, clean, and the view was amazing! The staff were extremely helpful and friendly. I also like that there are a lot of options to eat. I had a very good time here at this hotel and would love to come back soon.",
      "I very much appreciate the efforts and efficiency of all your hotel staff during my stay. If I have the opportunity to travel again in the near future, I will certainly get in touch with your hotel. Keep up the good service!",
      "Very low quality hotel in a very good location. Service was bad and the room was cheap. Do not recommend.",
      "Great job with Covid protocols. We stayed there over labor day weekend and I felt totally safe. Staff was very friendly. Great signage for everyone to stay 6 ft apart. Tons of outdoor activities",
      "Excellent location for a decent price. Super nice and accommodating staff.",
      "I really like their service. They have a very friendly staff and everything was clean and comfortable! Highly recommended!",
      "Construction blocking front entrance. Rooms were okay- definitely need some work. Surprised at room condition for a 4 star hotel.",
      "Hotel was comfy, clean and cute. We very much enjoyed our time there! Friendly staff topped it off!",
      "Great location, close to everything. Starbucks on-site. Just right beside subway station.",
      "Service not bad. Bathroom is a bit small and the shampoo bottle was empty and wasn't refilled during our stay.",
    ]

    const reviews = () => {

      const reviewSeeds = [
        {
          bookingId: 3,
          rating: 5,
          comment: "Stayed here for my birthday last year and I’d definitely say this is a hidden gem",
          userId: 1,
        },

      ],
      for (let i = 0; i < 50; i++) {
        let randomReview = {
          bookingId: bookingId,
          rating: rating,
          comment: comments[commentNum],
        };
        reviewSeeds.push(randomReview);
      }
      return reviewSeeds;
    }
    return queryInterface.bulkInsert("Reviews", reviews(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
