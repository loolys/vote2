import React, { Component } from 'react';
import ProfileData from './ProfileData';
import { connect } from 'react-redux';
import { getUserPolls } from '../../actions/profileActions';
import { Grid, Row, Col } from 'react-bootstrap';

import './profile.css';

class Profile extends Component {
  render() {
    const { getUserPolls } = this.props;
    return (
      <Grid className="profile-polls">
        <Row className="show-grid">
          <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={8} xsOffset={2}>
            <ProfileData getUserPolls={getUserPolls} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

Profile.propTypes = {
  getUserPolls: React.PropTypes.func.isRequired
};

export default connect(null, { getUserPolls })(Profile);
