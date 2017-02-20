import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Greetings.css'

export default class Greetings extends Component {
  render() {
    return (
      <div className="greetings">
        <Grid style={{width:'100%'}}>
          <Row className="show-grid text-center">
            <Col xs={12} md={12}><h1>Create Polls Easy</h1><br /></Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} md={4}>
              <i className="fa fa-tag fa-3x" aria-hidden="true"></i><br />
              <h3>1. Add A Title</h3>
              Just type your question in the title box to add your title.
            </Col>
            <Col xs={12} sm={4} md={4}>
              <i className="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i><br />
              <h3>2. Add Options</h3>
              Write your option in the option box and click on Add Option to add your
              option or just press enter. You can add up to 20 options.
            </Col>
            <Col xs={12} sm={4} md={4}>
              <i className="fa fa-paper-plane fa-3x" aria-hidden="true"></i><br />
              <h3>3. Publish!</h3>
              When your poll is ready just press create to publish your poll.
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
