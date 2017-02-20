import React, { Component } from 'react';
import NewPollForm from './NewPollForm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';
import { Grid, Row, Col } from 'react-bootstrap';

class NewPoll extends Component {
  render() {
    const { addFlashMessage } = this.props;
    return (
      <Grid className="latest-polls">
        <Row className="show-grid">
          <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={8} xsOffset={2}>
            <NewPollForm addFlashMessage={addFlashMessage} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

NewPoll.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, { addFlashMessage })(NewPoll);
