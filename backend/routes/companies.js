const express = require('express');
const router = express.Router();

const Company = require('../models/Company.model');

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

module.exports = router;
