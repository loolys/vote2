import React, { Component } from 'react';
import ProfileData from './ProfileData';
import { connect } from 'react-redux';
import { getUserPolls } from '../../actions/profileActions';

class Profile extends Component {
  render() {
    const { getUserPolls } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <ProfileData getUserPolls={getUserPolls} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getUserPolls: React.PropTypes.func.isRequired
};

export default connect(null, { getUserPolls })(Profile);
