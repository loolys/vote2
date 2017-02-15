import React, { Component } from 'react';
import { getPolls } from '../../actions/pollActions';
import LatestPollsEntries from './LatestPollsEntries';
import { connect } from 'react-redux';

class LatestPolls extends Component {
  render() {
    const { getPolls } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LatestPollsEntries
            getPolls={getPolls}
          />
        </div>
      </div>
    );
  }
}

LatestPolls.propTypes = {
  getPolls: React.PropTypes.func.isRequired
}

export default connect(null, { getPolls })(LatestPolls);
