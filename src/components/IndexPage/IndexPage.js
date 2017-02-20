import React, { Component } from 'react';

import Greetings from './Greetings';
import Statistics from './Statistics';
import CreatePoll from './CreatePoll';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Greetings />
        <Statistics />
        <CreatePoll />
      </div>
    );
  }
}
