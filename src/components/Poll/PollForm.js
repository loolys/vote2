import React, { Component } from 'react';
import PollFormList from './PollFormList';
import { voteForOption } from '../../actions/pollActions';
import { connect } from 'react-redux';
import { PollChart } from './PollChart';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../validations/addOption';
import cookie from 'react-cookie';

import io from 'socket.io-client';
let socket = io('https://createpolls.herokuapp.com');

class PollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: [],
      title: '',
      selectedOption: '',
      id: this.props.id,
      errors: {},
      addOption: '',
      voted: false,
      data: []
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitOption = this.submitOption.bind(this);
    this.socketUpdate = this.socketUpdate.bind(this);
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

    if (cookie.load(this.props.id)) {
      this.setState({ voted: true });
    }
  }

  componentDidMount() {
    socket.on('updatePoll', this.socketUpdate);
  }

  socketUpdate(data) {
    this.setState({ data: data });
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
    cookie.save(this.props.id, true, { path: '/' });
    this.setState({ voted: true });
  }

  submitOption(event) {
    event.preventDefault();
    if(this.isValid()) {
      this.setState({
        errors: {
          addOption: ''
        }
      });

      this.props.addOption(this.state).then(
        () => {
          const addToPoll = {
            id: this.state.poll.length,
            option: this.state.addOption,
            votes: 0
          };
          const addToData = {
            label: this.state.addOption,
            value: 0
          };

          this.setState({
            poll: this.state.poll.concat([addToPoll]),
            data: this.state.data.concat([addToData]),
            addOption: ''
          });
        }
      );
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

      socket.emit('updatePoll', data);

      this.setState({
        data: data
      });
    });
  }

  render() {
    const { poll, selectedOption, title, data, errors, addOption, voted } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-1">
          { !voted ? <form onSubmit={this.onSubmit}>
            <h1>Title: {title}</h1>
            <PollFormList
              poll={poll}
              onChange={this.handleOptionChange}
              selectedOption={selectedOption}
            />
            <input type="submit" disabled={voted} value="submit" />
          </form> : 'thank you for voting' }
        </div>
        <div className="col-md-4">
          <PollChart data={data} title={title} />
        </div>
        <div className="col-md-4 col-md-offset-1">
          { !voted ? <form onSubmit={this.submitOption}>
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
          </form> : '' }
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
