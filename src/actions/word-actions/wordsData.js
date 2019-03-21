import { API_BASE_URL } from '../../config';

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const getDataRequest = () => ({
  type: GET_DATA_REQUEST
});
export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  data
});
export const getDataError = err => ({
  type: GET_DATA_ERROR,
  err
});

export const getData = data => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getDataRequest());

  return fetch(`${API_BASE_URL}/words/data`, {
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
      return dispatch(getDataSuccess(data));
    })
    .catch(err => dispatch(getDataError(err)));
};
