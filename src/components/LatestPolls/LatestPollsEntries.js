import React, { Component } from 'react';
import PollList from './PollList';

class LatestPollsEntries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    }
  }

  componentWillMount() {
    this.props.getPolls().then(res => {
      const titles = res.data.map((obj) => {
        return { 
          title: obj.title,
          id: obj._id 
        };
      });
      console.log(titles);
      this.setState({ polls: titles });
    });
  }
  render() {
    const { polls } = this.state;
    return (
      <div>
        <PollList polls={polls} />
      </div>
    );
  }
}

LatestPollsEntries.propTypes = {
  getPolls: React.PropTypes.func.isRequired
};

export default LatestPollsEntries;
