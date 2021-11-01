const mongoose = require('mongoose');
const Company = require('../models/Company.model');
const Share = require('../models/Share.model');
const connectDB = require('../db/db');

const companies = [
  {
    name: 'GreenTex AG',
    founded_in: new Date(2005),
    logo: String,
    description:
      'Green Textiles are our passion and we want to develop a better future.',
    sustainability_rating: 4,
  },
  {
    name: 'Tech4thebest',
    founded_in: new Date(2011),
    logo: String,
    description: 'Tech will help revolutionize our world.',
    sustainability_rating: 3,
  },
];

const shares = [
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    from_company: '',
    amount: 300,
  },
  {
    name: 'The better choice',
    price: 63,
    issued_on: new Date(2012),
    from_company: '',
    amount: 200,
  },
  {
    name: "You're a techie",
    price: 89,
    issued_on: new Date(2008),
    from_company: '',
    amount: 600,
  },
];

connectDB()
  .then(() => {
    return Company.deleteMany();
  })
  .then(() => {
    return Share.deleteMany();
  })
  .then(() => {
    return Company.create(companies);
  })
  .then((companies) => {
    console.log(`Created ${companies.length} Companies.`);
    Company.find().then((companies) => {
      /* Add Share Allocation here */

      let company1 = companies[0]._id;
      let company2 = companies[1]._id;

      shares[0].from_company = company1;
      shares[1].from_company = company1;
      shares[2].from_company = company2;

      Share.create(shares).then((shares) => {
        console.log(`Created ${shares.length} Shares.`);
        mongoose.connection.close();
      });
    });
  });

// run $node bin/seed.js to get the seed into the database!
