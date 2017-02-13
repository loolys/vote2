const express = require('express');
const authentication = require('../middlewares/authentication');
const validateInput = require('../shared/validations/poll');
const PollModel = require('../models/poll-model');

let router = express.Router();

router.post('/', authentication, (req, res) => {
  console.log(req.currentUser.username);
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    const username = req.currentUser.username;
    const { title, options } = req.body;

    const poll = new PollModel({
      username: username,
      title: title,
      options: options
    });

    poll.save(function (err) {
      if (err) {
        res.status(500).json({error: 'couldn\'t save'});
      } else {
        res.json({ success: true });
      }
    })
  } else {
    res.status(400).json({error: 'invalid input'});
  }

});

router.get('/', (req, res) => {
  PollModel.find({}).sort({$natural: -1}).limit(10).exec(function(err, docs) {
    if (err) {
      res.status(500).json({ error: 'Nothing found in database' });
    } else {
      res.json(docs);
    }

  });
})

module.exports = router;
