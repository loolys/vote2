import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.addOption)) {
    errors.addOption = 'This field can\'t be empty';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
