import {
  FETCH_REQUESTS_BEGIN,
  FETCH_REQUESTS_FAIL,
  FETCH_REQUESTS_SUCCESS,
  FETCH_SCHEME_BEGIN,
  FETCH_SCHEME_FAIL,
  FETCH_SCHEME_SUCCESS,
  SET_ALL_REQUEST,
  SET_CURRENT_SCHEME,
  UPDATE_SQUEME_ATTRIBUTE
} from "../actionTypes";

const WS_BASE_URL = "https://5d4f8ba923144c001417dd5b.mockapi.io/api/v1";

export const loadScheme = id => dispatch => {
  const url = `${WS_BASE_URL}/schemes/${id}`;
  dispatch({
    type: FETCH_SCHEME_BEGIN
  });
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(setCurrentScheme(json.data));
      dispatch({ type: FETCH_SCHEME_SUCCESS });
    })
    .catch(err =>
      dispatch({
        type: FETCH_SCHEME_FAIL,
        payload: err
      })
    );
};

export const setCurrentScheme = scheme => {
  return {
    type: SET_CURRENT_SCHEME,
    payload: scheme
  };
};

export const fetchRequests = () => dispatch => {
  const url = `${WS_BASE_URL}/requests`;
  dispatch({
    type: FETCH_REQUESTS_BEGIN
  });
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(setAllRequests(json.data));
      dispatch({ type: FETCH_REQUESTS_SUCCESS });
    })
    .catch(err =>
      dispatch({
        type: FETCH_REQUESTS_FAIL,
        payload: err
      })
    );
};

export const setAllRequests = requests => {
  return {
    type: SET_ALL_REQUEST,
    payload: requests
  };
};

export const updateSchemeAttribute = payload => {
  return {
    type: UPDATE_SQUEME_ATTRIBUTE,
    payload
  };
};
