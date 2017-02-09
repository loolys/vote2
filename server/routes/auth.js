const express = require('express');
const UserModel = require('../models/user-model');
const jwt = require('jsonwebtoken');
const config = require('../config');

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  let query = UserModel.where({ username: identifier })
  
  query.findOne(function (err, found) {
    if (err) throw err;
    if (found) {
      found.comparePassword(password, function(err, isMatch){
        if (isMatch) {
          const token = jwt.sign({
            id: found._id,
            username: found.username
          }, config.jwtSecret);
          res.json({ token });
        } else {
          res.status(401).json({ errors: { form: 'Invalid Credentials' }});
        }
      })
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' }});
    }
  });
});

module.exports = router;
