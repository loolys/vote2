import React, { Component } from 'react';
import { getPolls } from '../../actions/pollActions';
import LatestPollsEntries from './LatestPollsEntries';
import { connect } from 'react-redux';

class LatestPolls extends Component {
  render() {
    const { getPolls } = this.props;
    return (
      <div>
        <LatestPollsEntries
          getPolls={getPolls}
        />
      </div>
    );
  }
}

LatestPolls.propTypes = {
  getPolls: React.PropTypes.func.isRequired
}

export default connect(null, { getPolls })(LatestPolls);
