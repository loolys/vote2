import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App.js';
import IndexPage from './components/IndexPage/IndexPage.js';
import About from './components/About/About.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import NewPoll from './components/NewPoll/NewPoll.js';
import LatestPolls from './components/LatestPolls/LatestPolls';

import requireAuth from './utils/requireAuth';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/new-poll" component={requireAuth(NewPoll)} />
      <Route path="/latest-polls" component={LatestPolls} />
    </Route>
  </Router>
);

export default Routes;
