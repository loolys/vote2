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

      this.setState({ polls: titles });
    });
  }
  render() {
    const { polls } = this.state;
    return (
      <div>
        <h1 className="text-center">Latest Polls</h1>
        <PollList polls={polls} />
      </div>
    );
  }
}

LatestPollsEntries.propTypes = {
  getPolls: React.PropTypes.func.isRequired
};

export default LatestPollsEntries;
