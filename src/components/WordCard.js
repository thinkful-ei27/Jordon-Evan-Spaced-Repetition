import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { required } from '../validators';
import { setUserInput } from '../actions/word-actions/getWords';
import Input from './input';
import { getWords } from '../actions/word-actions/getWords';
import { postGuess } from '../actions/word-actions/postGuess';
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
      return <div className="loading">loading...</div>;
    }
    const { dispatch, handleSubmit, words, correctOrIncorrect } = this.props;
    const renderRightOrWrong =
      correctOrIncorrect.rightOrWrong === 'correct' ? (
        <p>¡PERFECTO!</p>
      ) : correctOrIncorrect.rightOrWrong === 'incorrect' ? (
        <div>
          <p>quizás la próxima 😕</p>
          <p>{`la respuesta es ${correctOrIncorrect.answer}`}</p>
        </div>
      ) : (
        <p>tú lo sabes</p>
      );

    return (
      <div className="word-card">
        <header>{words.word}</header>
        <form
          onSubmit={handleSubmit(value => {
            dispatch(postGuess(value)).then(res => res.correctOrIncorrect);
          })}
        >
          <div />
          <Field
            name="guess"
            className="guess"
            component={Input}
            type="text"
            placeholder="tu respuesta"
            ref="guess"
            validate={[required]}
          />
          <div>
            <p>{`has conocido esta palabra ${words.correctCount} veces`}</p>
            <p>{`respondiste esta palabra incorrectamente ${
              words.incorrectCount
            } veces`}</p>
          </div>
          <div className="word-buttons">
            <button type="submit">envía tu respuesta</button>
            <button
              type="reset"
              onClick={value => {
                dispatch(getWords(words));
              }}
            >
              proxima palabra{' '}
            </button>
          </div>
        </form>
        <div className="feedback">{renderRightOrWrong}</div>
      </div>
    );
  }
  //onSubmit check if answer is correct and display feedback accordingly
  // somehow switch button to go to the next question?
}

const mapStateToProps = state => ({
  words: state.words.words,
  correctOrIncorrect: state.words.correctOrIncorrect,
  loading: state.words.loading
});

WordCard = requiresLogin()(connect(mapStateToProps)(WordCard));
export default reduxForm({
  form: 'submitAnswerForm'
})(WordCard);
