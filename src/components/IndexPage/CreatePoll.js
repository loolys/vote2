import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './CreatePoll.css';

export default class CreatePoll extends Component {
  render() {
    return (
      <div className="create-poll">
        <Grid style={{width:'100%'}}>
          <Row className="text-center">
            <Col xs={12} md={12}>
              <h1>Create Your Poll Now</h1>
              <br />
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={12} md={12}>
              <Button bsStyle="warning">
                <Link to="/new-poll">Create a Poll For Free</Link>
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
