import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../validators';
import Input from './input';
function WordCard(props) {
  return (
    <div>
      <header>{props.words}</header>
      <form>
        <Field
          name="answerInput"
          component={Input}
          type="text"
          placeholder="tu respuesta"
          validate={[required]}
        />
        <button type="submit">envía tu respuesta</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  words: state.words.words
});

WordCard = connect(mapStateToProps)(WordCard);
export default reduxForm({
  form: 'submitAnswerForm'
})(WordCard);
