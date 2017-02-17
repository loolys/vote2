const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports = function validateOption(data) {
  let errors = {};

  if (Validator.isEmpty(data.addOption)) {
    errors.title = 'This field can\'t be empty';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
