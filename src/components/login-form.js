import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Link } from 'react-router-dom';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props
      .dispatch(login(values.username, values.password))
      .then(() => this.props.history.push('/dashboard'));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <label htmlFor="username">Username</label>
        <Field
          ariaLabel="username"
          autoComplete="username"
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          autoComplete="current-password"
          ariaLabel="password"
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
        <Link to="/">Or Register</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
