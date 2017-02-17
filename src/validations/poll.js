import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title can\'t be empty';
  }

  if (data.options.length < 2 ) {
    errors.option = 'Minimum 2 options required.';
  }

  if (data.options.length > 20) {
    errors.option = 'No more than 20 options allowed, please delete some';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
