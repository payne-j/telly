"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let host = Math.floor(Math.random() * 101);
    let price = faker.random.number({
      min: 95,
      max: 550,
    });
    let boolean = Math.round(Math.random()) == true;
    let bedrooms = faker.random.number({
      min: 0,
      max: 4,
    });
    let bathrooms = faker.random.number({
      min: 1,
      max: 3.5,
    });

    let occupancy = bedrooms * 2;

    return queryInterface.bulkInsert(
      "Tellies",
      [
        {
          name: "The Beverly Hills Hotel",
          type: "Luxury",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "9641 Sunset Boulevard",
          city: "Beverly Hills",
          zip: 90210,
          state: "California",
          description:
            "Welcome to the Hotel California Such a lovely place (Such a lovely place) Such a lovely face. Plenty of room at the Hotel California. Any time of year (Any time of year). You can find it here",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 2,
        },
        {
          name: "Heartbreak Hotel",
          type: "Resort",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "923 N Gloster St",
          city: "Tupelo",
          zip: 38804,
          state: "Mississippi",
          description:
            "Well now, if your baby leaves you. And you have a sad tale to tell. Just take a walk down Lonely Street. To Heartbreak Hotel. And you will be, you will be, you will be lonely, baby. You'll be so lonely. You'll be so lonely, you could die",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 4,
        },
        {
          name: "Copacabana Palace",
          type: "Excursion",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "Av. Atlântica",
          city: "Copacabana, Rio de Janeiro",
          zip: 22021 - 001,
          state: "Rio de Janeiro",
          description:
            "At the copa (co) Copacabana (Copacabana). The hottest spot north of Havana (here). At the copa (co) Copacabana. Music and passion were always the fashion",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 3,
        },
        {
          name: "Holiday Inn",
          type: "Historic",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "50 US Highway 17 North",
          city: "Paramus",
          zip: 07652,
          state: "New Jersey",
          description: "Everybody go: Hotel, motel, Holiday Inn",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 5,
        },
        {
          name: "The Ritz-Carlton",
          type: "Luxury",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "280 Vanderbilt Beach Rd",
          city: "Naples",
          zip: 34108,
          state: "Florida",
          description:
            "If you're blue and you don't know where to go to. Why don't you go where fashion sits?",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 6,
        },
        {
          name: "Hotel Yorba",
          type: "Budget",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "250 W Larned St",
          city: "Detroit",
          zip: 48226,
          state: "Michigan",
          description:
            "Well, it's one, two, three, four. Take the elevator at the Hotel Yorba. I'll be glad to see you later. All they got inside is vacancy",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 7,
        },
        {
          name: "Memory Motel",
          type: "Motel",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "692 Montauk Highway,",
          city: "Montauk",
          zip: 11954,
          state: "New York",
          description:
            "What's all this laughter on the 22nd floor. It's just some friends of mine. And they're busting down the door",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 8,
        },
        {
          name: "",
          type: "Resort",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "211 East 3rd Street",
          city: "Austin",
          zip: 78701,
          state: "Texas",
          description:
            "Doing nothing at all. Some useless holiday. This turned out to be",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 10,
        },
        {
          name: "Blue Hotel",
          type: "Boutique",
          totalBedrooms: bedrooms,
          totalBathrooms: bathrooms,
          occupancy: occupancy,
          streetAddress: "1401 Commerce St, Dallas",
          city: "Dallas",
          zip: 75201,
          state: "Texas",
          description:
            "Blue hotel. On a lonely highway. Blue hotel. Life don't work out my way",
          available: true,
          internet: boolean,
          airConditioning: boolean,
          wifi: boolean,
          tv: boolean,
          washerDryer: boolean,
          gym: boolean,
          kitchen: boolean,
          freeParking: boolean,
          essentials: boolean,
          pool: boolean,
          price: price,
          hostId: 10,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tellies", null, {});
  },
};
