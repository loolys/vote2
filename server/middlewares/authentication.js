const jwt = require('jsonwebtoken');
const config = require('../config');
const UserModel = require('../models/user-model');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(" ")[1];
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {
        let query = UserModel.where({ _id: decoded.id });
        console.log(decoded);
        query.findOne({}, '_id username', function (err, found) {
          if (!found) {
            res.status(404).json({ error: 'No such user'});
          }

          req.currentUser = found;
          next();
        });
      }
    });
  } else {
    res.status(403).json({
      error: 'No token'
    });
  }
}
