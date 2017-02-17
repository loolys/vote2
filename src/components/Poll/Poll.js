import React, { Component } from 'react';
import PollForm from './PollForm';
import { connect } from 'react-redux';
import { getSpecificPoll, addOption } from '../../actions/pollActions';

class Poll extends Component {
  render() {
    const id = this.props.params.id;
    const { getSpecificPoll, addOption } = this.props; 
    return (
          <PollForm 
            getSpecificPoll={getSpecificPoll}
            addOption={addOption}
            id={id}/>
    );
  }
}

Poll.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired,
  addOption: React.PropTypes.func.isRequired
};

export default connect(null, { getSpecificPoll, addOption })(Poll);
