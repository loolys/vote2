// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');

const users = require('./routes/users');
const auth = require('./routes/auth');
const polls = require('./routes/polls');
const profile = require('./routes/profile');
const UserModel = require('./models/user-model');

mongoose.Promise = global.Promise;
const connStr = process.env.MONGODB || 'mongodb://localhost:27017/mongoose-bcrypt-test';
mongoose.connect(connStr);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connect to db');
});

const app = express();

app.use(bodyParser.json());
app.use(compression());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/polls', polls);
app.use('/api/profile', profile);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(cors());
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
