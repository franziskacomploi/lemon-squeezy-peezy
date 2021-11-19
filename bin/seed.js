const mongoose = require('mongoose');
const Company = require('../models/Company.model');
const Share = require('../models/Share.model');
const connectDB = require('../db/db');

const companies = [
  {
    name: 'GreenTex AG',
    founded_in: new Date(2005),
    logo: 'https://res.cloudinary.com/dq66nu4hm/image/upload/v1637354795/lemon-squeezy/khadeeja-yasser-3U9L9Chc3is-unsplash_f81qsj.jpg',
    description:
      'Green Textiles are our passion and we want to develop a better future.',
    sustainability_rating: 4,
  },
  {
    name: 'Tech4thebest',
    founded_in: new Date(2011),
    logo: 'https://res.cloudinary.com/dq66nu4hm/image/upload/v1637354827/lemon-squeezy/ian-dooley-TLD6iCOlyb0-unsplash_uvtv62.jpg',
    description: 'Tech will help revolutionize our world.',
    sustainability_rating: 3,
  },
  {
    name: 'IronTech',
    founded_in: new Date(2009),
    logo: 'https://res.cloudinary.com/dq66nu4hm/image/upload/v1637354802/lemon-squeezy/insung-yoon-w2JtIQQXoRU-unsplash_xp8kr5.jpg',
    description: 'Everything Iron.',
    sustainability_rating: 5,
  },
  {
    name: 'LifeOnEarth',
    founded_in: new Date(2012),
    logo: 'https://res.cloudinary.com/dq66nu4hm/image/upload/v1637354819/lemon-squeezy/moritz-kindler-mGFHA_0TWnA-unsplash_zpkwop.jpg',
    description: 'Super duper!',
    sustainability_rating: 3,
  },
  {
    name: 'HippieGreenTech',
    founded_in: new Date(2012),
    logo: 'https://res.cloudinary.com/dq66nu4hm/image/upload/v1637354793/lemon-squeezy/stanislav-vdovin-LXkwrYG-Kvg-unsplash_rxfsv1.jpg',
    description: 'Rock n Roll',
    sustainability_rating: 5,
  },
];

const shares = [
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    company: '',
    amount: 1000,
  },
  {
    name: 'The better choice',
    price: 63,
    issued_on: new Date(2012),
    company: '',
    amount: 900,
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
    amount: 3500,
  },
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    company: '',
    amount: 2000,
  },
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    company: '',
    amount: 2000,
  },
  {
    name: '0815 Share',
    price: 58,
    issued_on: new Date(2006),
    company: '',
    amount: 2000,
  },
  {
    name: 'The better choice',
    price: 63,
    issued_on: new Date(2012),
    company: '',
    amount: 900,
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
      let company4 = companies[3]._id;
      let company5 = companies[4]._id;

      shares[0].company = company1;
      shares[1].company = company1;
      shares[2].company = company2;
      shares[3].company = company3;
      shares[4].company = company3;
      shares[5].company = company4;
      shares[6].company = company5;
      shares[7].company = company5;

      Share.create(shares).then((shares) => {
        console.log(`Created ${shares.length} Shares.`);
        mongoose.connection.close();
      });
    });
  });

// run $node bin/seed.js to get the seed into the database!
