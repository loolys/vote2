import React, { Component } from 'react';
import PollList from '../LatestPolls/PollList';

class ProfileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    };
  }

  componentWillMount() {
    this.props.getUserPolls('loolY').then((res) => {
      const polls = res.data.map((item) => {
        return {
          id: item._id,
          title: item.title
        };
      });
      this.setState({ polls: polls });
    });
  }

  render() {
    const { polls } = this.state;
    return (
      <div>
      <h1 className="text-center">Your Polls</h1>
      <PollList polls={polls} />
      </div>
    );
  }
}

ProfileData.propTypes = {
  getUserPolls: React.PropTypes.func.isRequired
};

export default ProfileData;
