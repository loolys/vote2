const express = require('express');
const validateInput = require('../shared/validations/signup');
const UserModel = require('../models/user-model');

let router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    const { username, password } = req.body;

    const user = new UserModel({
      username: username,
      password: password
    });

    user.save(function (err) {
      if (err) res.status(500).json({ error: err });
      console.log('saved user');
    }).then( res.json({ success: true }));

  } else {
    res.status(400).json(errors);
  }

});

module.exports = router;
