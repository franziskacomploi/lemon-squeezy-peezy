const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('test route');
  res.status(200).json({message: 'Test success'});
});

module.exports = router;
