import React, { Component } from 'react';
import NewPollForm from './NewPollForm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';

class NewPoll extends Component {
  render() {
    const { addFlashMessage } = this.props;
    return (
      <div>
        <NewPollForm addFlashMessage={addFlashMessage} />
      </div>
    );
  }
}

NewPoll.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, { addFlashMessage })(NewPoll);
