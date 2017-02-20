import React, { Component } from 'react';
import { getPolls } from '../../actions/pollActions';
import LatestPollsEntries from './LatestPollsEntries';
import { connect } from 'react-redux';
import './LatestPolls.css'

class LatestPolls extends Component {
  render() {
    const { getPolls } = this.props;
    return (
      <div className="LatestPolls">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LatestPollsEntries
            getPolls={getPolls}
          />
        </div>
      </div>
      </div>
    );
  }
}

LatestPolls.propTypes = {
  getPolls: React.PropTypes.func.isRequired
}

export default connect(null, { getPolls })(LatestPolls);
