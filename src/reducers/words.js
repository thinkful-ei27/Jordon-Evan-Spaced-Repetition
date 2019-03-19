import { SET_USER_INPUT } from '../actions/word-actions/getWords';

const initialState = {
  words: [
    { word: 'hola', answer: 'hello', correctCount: 0, incorrectCount: 0 },
    { word: 'gracias', answer: 'thank you' }
  ],
  userInput: null,
  error: null,
  loading: false
};

export default function wordReducer(state = initialState, action) {
  if (action.type === SET_USER_INPUT) {
    // console.log(action.userInput);
    return {
      ...state,
      userInput: action.userInput
    };
  }
  return state;
}

//maybe set words to an object?
// initialState = {
//   words: [{word:'hola',answer: 'hello'}, {word:'gracias',answer: 'thank you'}]
// }

// {
//   Words:  { word: 'hola', answer: 'hello', correctCount: 0, incorrectCount: 0, next: null}
// }
