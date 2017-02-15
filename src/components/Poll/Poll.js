import React, { Component } from 'react';
import PollForm from './PollForm';
import { connect } from 'react-redux';
import { getSpecificPoll } from '../../actions/pollActions';

class Poll extends Component {
  render() {
    const id = this.props.params.id;
    const { getSpecificPoll } = this.props; 
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <PollForm 
            getSpecificPoll={getSpecificPoll}
            id={id}/>
          </div>
      </div>
    );
  }
}

Poll.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired
};

export default connect(null, { getSpecificPoll })(Poll);
