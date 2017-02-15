import React, { Component } from 'react';
import PollForm from './PollForm';
import { connect } from 'react-redux';
import { getSpecificPoll } from '../../actions/pollActions';

class Poll extends Component {
  render() {
    const id = this.props.params.id;
    const { getSpecificPoll } = this.props; 
    return (
      <div>
        <PollForm 
          getSpecificPoll={getSpecificPoll}
          id={id}/>
      </div>
    );
  }
}

Poll.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired
};

export default connect(null, { getSpecificPoll })(Poll);
