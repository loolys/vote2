import React, { Component } from 'react';
import PollFormList from './PollFormList';
import { voteForOption } from '../../actions/pollActions';
import { connect } from 'react-redux';
import { PollChart } from './PollChart';

class PollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: [],
      title: '',
      selectedOption: '',
      id: this.props.id
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      this.setState({ poll: options, title: res.data.title });
    });
  }

  handleOptionChange(option) {
    console.log(option);
    this.setState({
      selectedOption: option
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.voteForOption(this.state);
  }

  render() {
    const { poll, selectedOption, title } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Title: {title}</h1>
          <PollFormList
            poll={poll}
            onChange={this.handleOptionChange}
            selectedOption={selectedOption}
          />
          <input type="submit" value="submit" />
        </form>

        <PollChart />
      </div>
    );
  }
}

PollForm.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired,
  voteForOption: React.PropTypes.func.isRequired
};

export default connect(null, { voteForOption })(PollForm);
