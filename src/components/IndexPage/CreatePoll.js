import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import './CreatePoll.css';

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const authed = this.props.auth.isAuthenticated;
    let linkText;
    let buttonText;
    if (authed) {
      linkText = "/new-poll";
      buttonText = "Create A Free Poll Now";
    } else {
      linkText = "/signup";
      buttonText = "Sign Up To Create A Poll";
    }
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
              <LinkContainer to={linkText}>
                <Button bsStyle="warning">
                  {buttonText}
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

CreatePoll.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {})(CreatePoll);
