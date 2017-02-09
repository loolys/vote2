import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import OptionList from './OptionList'

class NewPollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
      option: '',
      options: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.optionChange = this.optionChange.bind(this);
    this.addOption = this.addOption.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  addOption(event) {
    this.setState(
      { 
        options: this.state.options.concat([this.state.option]),
        option: ''
      });
  }

  render() {
    const { title, errors, isLoading, option, options } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Poll</h1>

        <TextFieldGroup
          field="title"
          label="Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />
        <OptionList items={options} />

        <TextFieldGroup
          field="option"
          name="option"
          label="Add Option"
          value={option}
          onChange={this.onChange}
          error={errors.option}
        />

        <button 
          type="button"
          className="btn btn-success"
          onClick={this.addOption}
        >
          Add item
        </button>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

export default NewPollForm
