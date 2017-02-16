const express = require('express');
const PollModel = require('../models/poll-model');

let router = express.Router();

router.get('/:user', (req, res) => {
  console.log(req.params);
  PollModel.find({ username: req.params.user }, function (err, polls) {
    if (err) throw err;
    if (polls) {
      res.json(polls);
    } else {
      res.status(500).json({ error: 'Found nothing' });
    }

  })
});

router.delete('/delete/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  PollModel.findByIdAndRemove(id, function (err, offer) {
    if (err) throw err;
    if (offer) {
      res.json({ succes: true });
    } else {
      res.status(500).json({ error: 'Could not delete' });
    }
  })
});

module.exports = router;
