import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../validators';
import { setUserInput } from '../actions/word-actions/getWords';
import Input from './input';
import { getWords } from '../actions/word-actions/getWords';
import requiresLogin from './requires-login';
class WordCard extends Component {
  componentDidMount() {
    this.props.dispatch(getWords(this.props.words));
  }

  // checkAnswer = value => {
  //   return value.answerInput === this.props.words[0].answer;
  // };
  checkAnswer = value => {
    return this.props.words.find(word => value.answerInput === word.answer)
      ? true
      : false;
  };
  render() {
    if (this.props.loading) {
      return <div className="loading">loading.....</div>;
    }
    const { dispatch, handleSubmit, words } = this.props;
    console.log(words);
    // const spanish = words.map(word => {
    //   return word.word;
    // });
    // console.log(spanish);
    const renderRightOrWrong = this.props.userInput ? (
      <p>¡PERFECTO!</p>
    ) : (
      <p>quizás la próxima vez</p>
    );

    return (
      <div>
        <header>{words.word}</header>
        <form
          onSubmit={handleSubmit(value => {
            dispatch(setUserInput(this.checkAnswer(value)));
            console.log(this.props.userInput);
          })}
        >
          <div />
          <Field
            name="answerInput"
            component={Input}
            type="text"
            placeholder="tu respuesta"
            validate={[required]}
          />
          <button type="submit">envía tu respuesta</button>
        </form>

        <div>
          {this.props.submitSucceeded ? renderRightOrWrong : <p>tú lo sabes</p>}
        </div>
      </div>
    );
  }
  //onSubmit check if answer is correct and display feedback accordingly
  // somehow switch button to go to the next question?
}

const mapStateToProps = state => ({
  words: state.words.words,
  userInput: state.words.userInput,
  loading: state.loading
});

WordCard = requiresLogin()(connect(mapStateToProps)(WordCard));
export default reduxForm({
  form: 'submitAnswerForm'
})(WordCard);
