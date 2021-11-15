const express = require('express');
const router = express.Router();

const Company = require('../models/Company.model');
const Share = require('../models/Share.model');

router.get('/companies', (req, res) => {
  Company.find().then((companiesFound) => {
    res.send({companies: companiesFound});
  });
});

router.get('/companies/:id', (req, res) => {
  const id = req.params.id;
  Company.findById(id).then((companyFound) => {
    res.send({company: companyFound});
  });
});

router.get('/shares/:id', (req, res, next) => {
  const id = req.params.id;
  Share.find({company: id})
    .populate({path: 'company', model: Company})
    .then((sharesFound) => {
      res.send({shares: sharesFound});
      next();
    });
});

module.exports = router;
