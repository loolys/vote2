import React, { Component } from 'react';
import PollList from './PollList';

import styles from './styles';

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
      <div style={styles}>
        <h1>Latest Polls:</h1>
        <PollList polls={polls} />
      </div>
    );
  }
}

LatestPollsEntries.propTypes = {
  getPolls: React.PropTypes.func.isRequired
};

export default LatestPollsEntries;
