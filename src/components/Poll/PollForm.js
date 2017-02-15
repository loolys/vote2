import React, { Component } from 'react';

class PollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: {}
    };
  }

  componentWillMount() {
    this.props.getSpecificPoll(this.props.id).then((res) => {
      console.log(res);
      console.log(this.props.id);
    });
  }

  render() {
    return (
      <div>Hello from PollForm</div>
    );
  }
}

PollForm.propTypes = {
  getSpecificPoll: React.PropTypes.func.isRequired
};

export default PollForm;
