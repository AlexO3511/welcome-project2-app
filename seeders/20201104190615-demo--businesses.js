'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Businesses",
      [
        {
          name: "Augusta Grooming Lounge",
          address: "816 Broad St. Augusta, GA, 30901",
          website: "https://booksy.com/en-us/448337_augusta-grooming-lounge_barber-shop_16623_augusta",
          imageLink: "https://i.imgur.com/q13DEJOt.jpg",
          services:"Barbershop and Salon",
          businessId: 1
        },
        {
          name: "Jackie M's and Son Cafe and Catering",
          address: "3308 Milledgeville Rd, Augusta, GA 30909",
          website: "https://www.jackiemsandson.com",
          imageLink:"https://i.imgur.com/g9LDYkjt.png",
          services:"Restaurant: Sandwhiches and Wings",
          businessId: 2
        },
        {
          name: "ALIGN by Andiee",
          address: "Online Store",
          website: "https://www.alignbyandiee.com",
          imageLink:"https://i.imgur.com/9ywnEYct.png",
          services:"Organic Tea Co. and Health & Wellness Consultant",
          businessId: 3
        },
        {
          name: "Super Shine Car Wash",
          address: "134 Davis Rd. Martinez, GA",
          website: "https://www.mrcarwashga.com",
          imageLink:"https://i.imgur.com/uvrlfz5t.png",
          services:"Auto Detailing",
          businessId: 4
        },
        {
          name: "Savannah Rapids Kayak Rental",
          address: "Savannah Rapids Park, 7 Savannah Rapids Trail, Martinez, GA 30907",
          website: "https://kayakaugustacanal.com/",
          imageLink:"https://i.imgur.com/fL4Sh7nt.jpg",
          services:"Kayaking Rentals",
          businessId: 5
        },
        {
          name: "Bike Peddler",
          address: "3300 Evans to Locks Rd. Martinez, GA. 30907",
          website: "https://bikepeddleraugusta.com/",
          imageLink:"https://i.imgur.com/0db9oopt.jpg",
          services:"Bike Repair Services and Rentals for Augusta Canal Rides",
          businessId: 6
        },
        {
          name: "Greenbrier Crossfit Growl",
          address: "4534 Washington Rd, #12, Evans, Ga 30809",
          website: "https://greenbrierfitness.com/",
          imageLink:"https://i.imgur.com/VTWaiYtt.jpg",
          services:"Health and Wellness",
          businessId: 7
        },
        {
          name: "Coffee and Cars Augusta",
          address: "See website",
          website: "http://www.coffeeandcarsaugusta.com/",
          imageLink:"https://i.imgur.com/C5Xsdo4t.jpg",
          services:"Local Auto Car Meets and Vendors",
          businessId: 8
        },
        {
          name: "Savannah River Brewing Company",
          address: "816 5th Street, Augusta, GA, 30901",
          website: "https://www.savannahriverbrew.com/",
          imageLink:"https://i.imgur.com/eaNH4qqt.jpg",
          services:"Local Brewery",
          businessId: 9
        },
        {
          name: "Southbound Smokehouse-SRP Park",
          address: "1009 Center St, North Augusta, SC 29841",
          website: "https://southboundsmokehouse.com/",
          imageLink:"https://i.imgur.com/AH1IxoHt.gif",
          services:"Local Smoked BBQ, Live Music, and more!",
          businessId: 10
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
