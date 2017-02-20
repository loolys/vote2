import React, { Component } from 'react';
import { getPolls } from '../../actions/pollActions';
import LatestPollsEntries from './LatestPollsEntries';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import './LatestPolls.css'

class LatestPolls extends Component {
  render() {
    const { getPolls } = this.props;
    return (
      <Grid className="latest-polls">
        <Row className="show-grid">
          <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={8} xsOffset={2}>
          <LatestPollsEntries
            getPolls={getPolls}
          />
          </Col>
        </Row>
      </Grid>
    );
  }
}

LatestPolls.propTypes = {
  getPolls: React.PropTypes.func.isRequired
}

export default connect(null, { getPolls })(LatestPolls);
