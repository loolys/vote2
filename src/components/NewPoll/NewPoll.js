import React, { Component } from 'react';
import NewPollForm from './NewPollForm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';

class NewPoll extends Component {
  render() {
    const { addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <NewPollForm addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

NewPoll.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, { addFlashMessage })(NewPoll);
