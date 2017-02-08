import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App/App.js';
import IndexPage from './components/IndexPage/IndexPage.js';
import About from './components/About/About.js'
import SignUp from './components/SignUp/SignUp.js'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={SignUp} />
    </Route>
  </Router>
);

export default Routes;
