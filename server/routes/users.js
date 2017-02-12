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
      if (err) {
        return res.status(500).json({ success: false, status: '500', errors: 'Username exists' });
      }
      res.json({ success: true });
    });

  } else {
    res.status(400).json(errors);
  }

});

router.get('/:identifier', (req, res) => {
  let query = UserModel.where({ username: req.params.identifier });
  query.findOne(function (err, found) {
    if (err) throw err;
    if (found) {
      res.json( {found} );
    } else {
      res.json({found: 'nothing'})
    }
  });
})

module.exports = router;
