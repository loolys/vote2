import React, { Component } from 'react';
import classnames from 'classnames';
import validateInput from '../../validations/signup.js'
import TextFieldGroup from '../common/TextFieldGroup.js';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data } ) => this.setState({ errors: data, isLoading: false })
      );  
    }

  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Confirm Password"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />
        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

