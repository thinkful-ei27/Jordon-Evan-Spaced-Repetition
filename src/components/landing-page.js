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
    <div className="landing-page">
      <h2>Welcome to Spanish App</h2>
      <p className="app-desc">
        Using this app will help you learn Spanish fast, with our top secret
        spaced repetition algorithm!
      </p>
      <div className="landing-box">
        <div className="app-preview">
          <img
            alt="preivew of this page in action"
            src={require('../images/app-preview.png')}
          />
        </div>
        <RegistrationPage />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
