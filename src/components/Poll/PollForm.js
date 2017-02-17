import React, { Component } from 'react';
import PollFormList from './PollFormList';
import { voteForOption } from '../../actions/pollActions';
import { connect } from 'react-redux';
import { PollChart } from './PollChart';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../validations/addOption';

class PollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: [],
      title: '',
      selectedOption: '',
      id: this.props.id,
      errors: {},
      addOption: ''
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitOption = this.submitOption.bind(this);
  }

  componentWillMount() {
    this.props.getSpecificPoll(this.props.id).then((res) => {
      const options = res.data.options.map((obj) => {
        return { 
          option: obj.text,
          id: obj.id,
          votes: obj.votes
        };
      });
      const data = res.data.options.map((obj) => {
        return {
          label: obj.text,
          value: obj.votes
        };
      });

      this.setState({
        poll: options, 
        title: res.data.title,
        data: data
      });
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors: errors });
    }

    return isValid;
  }

  handleOptionChange(option) {
    this.setState({
      selectedOption: option
    });
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.voteForOption(this.state).then(this.updateVotes);
  }

  submitOption(event) {
    event.preventDefault();
    if(this.isValid()) {
      this.setState({
        errors: {
          addOption: ''
        }
      });

      this.props.addOption(this.state);
    }
  }

  updateVotes() {
    this.props.getSpecificPoll(this.props.id).then((res) => {
      const data = res.data.options.map((obj) => {
        return {
          label: obj.text,
          value: obj.votes
        };
      });

      this.setState({
        data: data
      });
    });
  }

  render() {
    const { poll, selectedOption, title, data, errors, addOption } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-1">
          <form onSubmit={this.onSubmit}>
            <h1>Title: {title}</h1>
            <PollFormList
              poll={poll}
              onChange={this.handleOptionChange}
              selectedOption={selectedOption}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="col-md-4">
          <PollChart data={data} title={title} />
        </div>
        <div className="col-md-4 col-md-offset-1">
          <form onSubmit={this.submitOption}>
            <h2>Don't like any option? Add your own!</h2>
            <TextFieldGroup
              field="addOption"
              name="addOption"
              label="Add Option"
              value={addOption}
              onChange={this.onChange}
              error={errors.addOption}
              type="text"
            />
            <input type="submit" value="add" />
          </form>
        </div>
      </div>
    );
  }
}

PollForm.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired,
  voteForOption: React.PropTypes.func.isRequired,
  addOption: React.PropTypes.func.isRequired
};

export default connect(null, { voteForOption })(PollForm);
