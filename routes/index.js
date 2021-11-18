const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('test route');
  res.status(200).json({message: 'Test success'});
});

router.get('/checkuser', (req, res, next) => {
  if (req.session.currentUser) {
    res.json({currentUser: req.session.currentUser});
  } else {
    res.json({currentUser: null});
  }
});

module.exports = router;
