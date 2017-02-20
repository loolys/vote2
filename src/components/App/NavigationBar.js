import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavigationBar extends React.Component {
  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const username = this.props.auth.user.username;

    const userLinks = (
      <div>
      <Nav bsStyle="pills">
        <LinkContainer to="/latest-polls">
          <NavItem style={{color:"white"}}>Latest Polls</NavItem>
        </LinkContainer>
        <LinkContainer  to="/new-poll">
          <NavItem>Create Poll</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to={`/profile/${username}`}>
          <NavItem>{username}</NavItem>
        </LinkContainer>
        <NavItem href="#" onClick={this.logout.bind(this)}>Logout</NavItem>
      </Nav>
      </div>
    );

    const guestLinks = (
      <div>
      <Nav>
        <LinkContainer to="/latest-polls">
          <NavItem>Latest Polls</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/signup">
          <NavItem>Sign up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>
      </Nav>
      </div>
    );

    return (
      <div className="my-nav">
      <Navbar collapseOnSelect style={{backgroundColor: "#084F70", color:"#FEFEFE"}}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Voting-App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          { isAuthenticated ? userLinks : guestLinks }
        </Navbar.Collapse>
      </Navbar>
      </div>
    );   
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
