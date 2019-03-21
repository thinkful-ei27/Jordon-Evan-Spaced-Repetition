import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getData } from '../actions/word-actions/wordsData';
import BarGraph from './Chart';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }

  // dataList(props) {
  //   const data = this.props.data.map((item, index) => (
  //     <li key={index}>
  //       Word: {item.word} || Correct answers: {item.correctCount} || Incorrect
  //       Count: {item.incorrectCount}
  //     </li>
  //   ));

  //   return (
  //     <div className="data-list">
  //       <ul>{data}</ul>
  //     </div>
  //   );
  // }

  render() {
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
          <BarGraph data={this.props.data} height={300} width={300} />
          <button onClick={() => this.props.history.push('/learn')}>
            ¡Estoy listo!
          </button>
        </div>
        {/* {this.dataList(this.props)} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  const { data } = state.data;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    data: data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
