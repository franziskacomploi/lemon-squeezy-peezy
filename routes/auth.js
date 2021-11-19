const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const fileUploader = require('../configs/cloudinary');

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const User = require('../models/User.model');

// SIGN UP

router.post('/signup', fileUploader.single('profileImg'), (req, res, next) => {
  const {email, password, name, profileImg, description} = req.body;

  if (!email || !password) {
    res.send({
      errorMessage: 'You need a email and a password to join.',
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        email,
        password: hashedPassword,
        name,
        profileImg,
        description,
      });
    })
    .then((user) => {
      req.session.currentUser = user;
      res.send(user);
      console.log('Newly created user is: ', user);
    });
});

// LOG IN

router.post('/login', (req, res, next) => {
  console.log('SESSION =====> ', req.session);

  const {email, password} = req.body;

  if (email === '' || password === '') {
    res.send({
      error: 'Please enter username and password to login.',
    });
    return;
  }

  User.findOne({email}).then((user) => {
    if (!user) {
      res.send({
        error: "We can't find this email.",
      });
    } else if (bcryptjs.compareSync(password, user.password)) {
      req.session.currentUser = user;
      res.send(user);
    } else {
      res.send({error: 'Incorrect password.'});
    }
  });
});

// LOG OUT

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.send();
  next();
});

module.exports = router;
