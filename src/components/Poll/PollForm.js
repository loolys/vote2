import React, { Component } from 'react';
import PollFormList from './PollFormList';

class PollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: [],
      selectedOption: ''
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
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
      this.setState({ poll: options });
    });
  }

  handleOptionChange(option) {
    console.log(option);
    this.setState({
      selectedOption: option
    });
  }

  render() {
    const { poll, selectedOption } = this.state;
    return (
      <div>
        Hello from PollForm
        <form>
          <PollFormList
            poll={poll}
            onChange={this.handleOptionChange}
            selectedOption={selectedOption}
          />
        </form>
      </div>
    );
  }
}

PollForm.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired
};

export default PollForm;
