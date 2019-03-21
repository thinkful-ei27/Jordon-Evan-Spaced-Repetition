import { API_BASE_URL } from '../../config';
export const POST_GUESS_REQUEST = 'POST_GUESS_REQUEST';
export const postGuessRequest = () => ({
  type: POST_GUESS_REQUEST
});

export const POST_GUESS_SUCCESS = 'POST_GUESS_SUCCESS';
export const postGuessSuccess = correctOrIncorrect => ({
  type: POST_GUESS_SUCCESS,
  correctOrIncorrect
});

export const POST_GUESS_ERROR = 'POST_GUESS_ERROR';
export const postGuessError = err => ({
  type: POST_GUESS_ERROR,
  err
});

export const postGuess = guess => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  dispatch(postGuessRequest());

  return fetch(`${API_BASE_URL}/words/guess`, {
    method: 'POST',
    body: JSON.stringify(guess),
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
    .then(newGuess => {
      return dispatch(postGuessSuccess(newGuess));
    })
    .catch(err => dispatch(postGuessError(err)));
};
