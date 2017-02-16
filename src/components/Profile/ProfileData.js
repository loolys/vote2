import React, { Component } from 'react';
import PollList from './PollList';
import { connect } from 'react-redux';
import { deletePolls } from '../../actions/profileActions';

class ProfileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    };

    this.deletePoll = this.deletePoll.bind(this);
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

  deletePoll(event) {
    this.props.deletePolls(event.id).then(
      () => {
        const filtered = this.state.polls.filter((item) => {
          return item.id !== event.id;
        });

        this.setState({ polls: filtered });
      },
      (err) => {
        console.log('error, couldn\'t remove poll');
      }
    );


  }

  render() {
    const { polls, deletePoll } = this.state;
    return (
      <div>
      <h1 className="text-center">Your Polls</h1>
      <PollList polls={polls} deletePoll={this.deletePoll} />
      </div>
    );
  }
}

ProfileData.propTypes = {
  getUserPolls: React.PropTypes.func.isRequired,
  deletePolls: React.PropTypes.func.isRequired
};

export default connect(null, { deletePolls })(ProfileData);
