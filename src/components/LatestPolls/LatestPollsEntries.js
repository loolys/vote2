import React, { Component } from 'react';

class LatestPollsEntries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    }
  }

  componentWillMount() {
    this.props.getPolls();
  }
  render() {
    return (
      <div></div>
    );
  }
}

LatestPollsEntries.propTypes = {
  getPolls: React.PropTypes.func.isRequired
};

export default LatestPollsEntries;
