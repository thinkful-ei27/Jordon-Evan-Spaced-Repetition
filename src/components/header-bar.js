import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
    }
    return (
      <header className="header-bar">
        {/* <div className="align-item" tabIndex="-1" /> */}
        <h1>Repetición Espaciada</h1>
        <nav className="nav-buttons">
          <Link className="button" to="/dashboard">
            <button className="home">Home</button>
          </Link>
          {logOutButton}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
