import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import BarGraph from './Chart';
export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    console.log(BarGraph);
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <p>
            ¡Hola{' '}
            {this.props.name.split(' ')[0]
              ? this.props.name.split(' ')[0]
              : this.props.username}{' '}
            listo para aprender algo de español!
          </p>

          <BarGraph />
          <button onClick={() => this.props.history.push('/learn')}>
            ¡Estoy listo!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
