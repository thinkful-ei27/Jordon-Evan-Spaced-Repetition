
import {
  GET_DATA_REQUEST,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS
} from '../actions/word-actions/wordsData';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export default function dataReducer(state = initialState, action) {
  if (action.type === GET_DATA_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  if (action.type === GET_DATA_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.err
    };
  }
  if (action.type === GET_DATA_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data
    };
  }
  return state;
}
