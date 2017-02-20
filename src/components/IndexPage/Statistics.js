import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Statistics.css'

export default class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        <Grid style={{width:'100%'}}>
          <Row className="text-center">
            <Col xs={4} md={4} mdOffset={2}>
              <i className="fa fa-bar-chart big-icon"></i>
            </Col>
            <Col xs={8} md={4}>
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
