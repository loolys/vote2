import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Statistics.css'

export default class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        <Grid style={{width:'100%'}}>
          <Row className="show-grid text-center">
            <Col sm={6} md={2} mdOffset={2} className="poll-col">
              <i className="fa fa-bar-chart big-icon"></i>
            </Col>
            <Col sm={6} md={4} mdOffset={1} className="poll-text">
              <h1>See Results Live In Graphs</h1>
              Your polls are update in-real-time and you can see
              the votes comming in on the Bar Chart.
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
