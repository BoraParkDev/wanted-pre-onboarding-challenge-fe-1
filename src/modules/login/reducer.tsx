import { createReducer } from 'typesafe-actions';
import { UserState, UserAction } from './types';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from './actions';

const initialState: UserState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [LOG_IN_REQUEST]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [LOG_IN_FAILURE]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [LOG_OUT]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default user;
