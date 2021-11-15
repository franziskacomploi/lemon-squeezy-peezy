const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const BoughtShare = require('../models/BoughtShares.model');
const Share = require('../models/Share.model');
const Company = require('../models/Company.model');

router.post('/buyshare', (req, res, next) => {
  const {name, company, price, user, boughtAmount, restAmount, originalShare} =
    req.body;
  BoughtShare.create({
    name,
    company,
    price,
    user,
    originalShare,
    amount: boughtAmount,
  })
    .then(() => {
      return Share.findOneAndUpdate({name}, {amount: restAmount}, {new: true});
    })
    .then(() => {
      res.send();
      next();
    });
});

router.post('/sellshare/:id', (req, res, next) => {
  const id = req.params.id;
  const {name, company, price, user, restAmount, soldAmount} = req.body;
  BoughtShare.findByIdAndUpdate(id, {amount: restAmount, price: price})
    .then(() => {
      return Share.findOneAndUpdate({name}, {amount: soldAmount});
    })
    .then(() => {
      res.send();
      next();
    });
});

router.get('/dashboard/:email', (req, res, next) => {
  const email = req.params.email;
  BoughtShare.find({user: email})
    .populate({path: 'company', model: Company})
    .populate({path: 'originalShare', model: Share})
    .then((shares) => {
      res.send({shares: shares});
      next();
    });
});

module.exports = router;
