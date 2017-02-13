const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports = function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title can\'t be empty';
  }

  if (data.options.length < 2 ) {
    errors.option = 'Minimum 2 options required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
