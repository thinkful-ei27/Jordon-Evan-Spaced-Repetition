import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getData } from '../actions/word-actions/wordsData';

export class Dashboard extends React.Component {
  componentDidMount() {
    console.log('component did mount')
    this.props.dispatch(getData());
  }

  dataList(props) {
    const data = this.props.data.map((item, index) => (
      <li key={index}>
        Word: {item.word} || Correct answers: {item.correctCount} || Incorrect Count: {item.incorrectCount}
      </li>
    ));

    return (
      <div className="data-list">
        <ul>
          {data}
        </ul>
      </div>
    );
  }

  render() {
    // const data = this.props.data.map(item => {
    //   console.log(item)
    //   // const dataObject = {
    //   //   word: item.word,
    //   //   correctCount: item.correctCount,
    //   //   incorrectCount: item.incorrectCount
    //   // };
    // });
    // console.log(data)
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
          <button onClick={() => this.props.history.push('/learn')}>
            ¡Estoy listo!
          </button>
        </div>
        {this.dataList(this.props)}
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
