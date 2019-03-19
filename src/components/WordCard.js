import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../validators';
import { setUserInput } from '../actions/word-actions/getWords';
import Input from './input';
function WordCard(props) {
  const { handleSubmit } = props;
  console.log(props.submitSucceeded);
  const checkAnswer = value => {
    return value.answerInput === props.words[0].answer;
  };
  const renderRightOrWrong = props.userInput ? (
    <p>¡PERFECTO!</p>
  ) : (
    <p>quizás la próxima vez</p>
  );

  //onSubmit check if answer is correct and display feedback accordingly
  // somehow switch button to go to the next question?
  return (
    <div>
      <header>{props.words[0].word}</header>
      <form
        onSubmit={handleSubmit(value => {
          props.dispatch(setUserInput(checkAnswer(value)));
          console.log(props.userInput);
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
        {props.submitSucceeded ? renderRightOrWrong : <p>tú lo sabes</p>}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  words: state.words.words,
  userInput: state.words.userInput
});

WordCard = connect(mapStateToProps)(WordCard);
export default reduxForm({
  form: 'submitAnswerForm'
})(WordCard);
