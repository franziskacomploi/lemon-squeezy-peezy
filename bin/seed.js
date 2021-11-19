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
  {
    name: 'IronTech',
    founded_in: new Date(2011),
    logo: String,
    description: 'Everything Iron.',
    sustainability_rating: 5,
  },
];

const shares = [
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    company: '',
    amount: 300,
  },
  {
    name: 'The better choice',
    price: 63,
    issued_on: new Date(2012),
    company: '',
    amount: 200,
  },
  {
    name: "You're a techie",
    price: 89,
    issued_on: new Date(2008),
    company: '',
    amount: 600,
  },
  {
    name: "You're a techie",
    price: 29,
    issued_on: new Date(2008),
    company: '',
    amount: 200,
  },
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    company: '',
    amount: 100,
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
      let company3 = companies[2]._id;

      shares[0].company = company1;
      shares[1].company = company1;
      shares[2].company = company2;
      shares[3].company = company3;
      shares[4].company = company3;

      Share.create(shares).then((shares) => {
        console.log(`Created ${shares.length} Shares.`);
        mongoose.connection.close();
      });
    });
  });

// run $node bin/seed.js to get the seed into the database!
