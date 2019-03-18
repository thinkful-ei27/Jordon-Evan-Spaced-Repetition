import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationPage from './registration-page';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Welcome to Spanish App</h2>
      <div className="app-preview">
        <img alt="preivew of this page in action" src={require('../images/temp-app-preview.png')} />
      </div>
      <RegistrationPage />
      <Link to="/login">Login</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);