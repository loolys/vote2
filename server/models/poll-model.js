const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Polls', PollSchema);
