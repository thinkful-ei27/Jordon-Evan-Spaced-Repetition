import { API_BASE_URL } from '../../config';

export const GET_WORDS_REQUEST = 'GET_WORDS_REQUEST';
export const GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS';
export const GET_WORDS_ERROR = 'GET_WORDS_ERROR';
export const getWordsRequest = () => ({
  type: GET_WORDS_REQUEST
});
export const getWordsSuccess = words => ({
  type: GET_WORDS_SUCCESS,
  words
});
export const getWordsError = err => ({
  type: GET_WORDS_ERROR,
  err
});

export const getWords = words => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getWordsRequest());

  return fetch(`${API_BASE_URL}/words`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }

      return res.json();
    })
    .then(data => {
      return dispatch(getWordsSuccess(data));
    })
    .catch(err => dispatch(getWordsError(err)));
};

export const SET_USER_INPUT = 'SET_USER_INPUT';
export const setUserInput = userInput => ({
  type: SET_USER_INPUT,
  userInput
});
