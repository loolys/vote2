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
    options.votes = 0;
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

router.post('/vote', (req, res) => {
  console.log(req);
  PollModel.update({
    _id: req.body.id, 'options.text': req.body.selectedOption
    },
    { $inc: {'options.$.votes': 1 } },
    function(err, updated) {
      if (err) throw err;
      if (updated) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: 'Something wrong' });
      }
    }
  );
});

router.get('/polls', (req, res) => {
  PollModel.find({}).sort({$natural: -1}).limit(10).exec(function(err, docs) {
    if (err) {
      res.status(500).json({ error: 'Nothing found in database' });
    } else {
      res.json(docs);
    }

  });
});

router.get('/test/:id', (req, res) => {
  let query = PollModel.where({ _id: req.params.id });
  query.findOne(function (err, doc) {
    if (err) throw err;
    if (doc) {
      res.json(doc);
    } else {
      res.status(500).json({error: 'Found nothing'});
    }
  });
});

module.exports = router;
