const express = require('express');
const authentication = require('../middlewares/authentication');

let router = express.Router();

router.post('/', authentication, (req, res) => {
  res.status(201).json({ 
    success: true
  });
});

module.exports = router;
