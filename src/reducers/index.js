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
import { normalize, schema } from "normalizr";

import { combineReducers } from "redux";

const attr = new schema.Entity("attrs");

const scheme = new schema.Entity("schemes", {
  attrs: [attr]
});

const initState = {
  schemeEditor: {
    schemes: {},
    attrs: {},
    fetching: false
  },
  requests: {
    all: [],
    fetching: false
  }
};

function schemeEditor(state = initState.schemeEditor, action) {
  switch (action.type) {
    case FETCH_SCHEME_SUCCESS:
      return {
        ...state,
        fetching: false
      };

    case SET_CURRENT_SCHEME:
      const normalized = normalize(action.payload, scheme);
      console.log(normalized);
      const { entities } = normalized;
      return {
        ...state,
        ...entities
      };

    case UPDATE_SQUEME_ATTRIBUTE:
      const attr = action.payload;
      return {
        ...state,
        attrs: {
          ...state.attrs,
          [attr.id]: attr
        }
      };

    case FETCH_SCHEME_BEGIN:
      return { ...state, fetching: true };

    case FETCH_SCHEME_SUCCESS:
      return { ...state, fetching: false };

    case FETCH_SCHEME_FAIL:
      return { ...state, fetching: false };

    default:
      return state;
  }
}

function requests(state = initState.requests, action) {
  switch (action.type) {
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        fetching: false
      };
    case SET_ALL_REQUEST:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_REQUESTS_BEGIN:
      return { ...state, fetching: true };

    case FETCH_REQUESTS_FAIL:
      return { ...state, fetching: false };

    default:
      return state;
  }
}

export default combineReducers({ schemeEditor, requests });
