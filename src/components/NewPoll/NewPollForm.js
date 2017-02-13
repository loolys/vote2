import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import OptionList from './OptionList'
import { connect } from 'react-redux';
import { createPoll } from '../../actions/pollActions';
import validateInput from '../../validations/poll';

import './NewPoll.css';

class NewPollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
      option: '',
      options: [],
      id: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors: errors });
    }

    return isValid;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      console.log('Valid poll');
      this.props.createPoll(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Poll Created!'
          });
          this.context.router.push('/');
        },
        (err) => {
          this.setState({
            errors: err.response.data.errors,          
          });
        }
      );
    }

  }

  addOption(event) {
    event.preventDefault();
    let obj = {
      id: this.state.id,
      text: this.state.option
    };

    this.setState(
      { 
        options: this.state.options.concat([obj]),
        option: '',
        id: this.state.id + 1
      });
  }

  deleteOption(item) {
    console.log(item);
    const newState = this.state.options;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({ options: newState });
    }
  }

  render() {
    const { title, errors, isLoading, option, options } = this.state;

    return (
      <div className="container">
      <form onSubmit={this.addOption}>
        <h1>Create New Poll</h1>

        <TextFieldGroup
          field="title"
          label="Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />
        

        <TextFieldGroup
          field="option"
          name="option"
          label="Add Option"
          value={option}
          onChange={this.onChange}
          error={errors.option}
          type="text"
        />

        <input type="submit" className="hide" />
        
      </form>

      <OptionList items={options} deleteOption={this.deleteOption} />

      <button 
          type="button"
          className="btn btn-success"
          onClick={this.addOption}
        >
          Add item
        </button>

      <button type="button"
        disabled={isLoading}
        className="btn btn-primary"
        onClick={this.onSubmit}
      >
        Create
      </button>
      </div>
    );
  }
}

NewPollForm.propTypes = {
  createPoll: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

NewPollForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { createPoll })(NewPollForm);
