import {
  SET_USER_INPUT,
  GET_WORDS_ERROR,
  GET_WORDS_REQUEST,
  GET_WORDS_SUCCESS
} from '../actions/word-actions/getWords';

const initialState = {
  words: [],
  userInput: null,
  error: null,
  loading: false
};

export default function wordReducer(state = initialState, action) {
  if (action.type === SET_USER_INPUT) {
    return {
      ...state,
      userInput: action.userInput
    };
  } else if (action.type === GET_WORDS_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === GET_WORDS_SUCCESS) {
    return {
      ...state,
      words: action.words
    };
  } else if (action.type === GET_WORDS_ERROR) {
    return {
      ...state,
      error: action.err
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
