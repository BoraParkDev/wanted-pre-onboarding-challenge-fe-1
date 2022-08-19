import { createReducer } from 'typesafe-actions';
import { UserState, UserAction } from './types';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './actions';

const initialState: UserState = {
  userData: {
    loading: false,
    error: null,
    data: null,
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [SIGN_UP_REQUEST]: (state) => ({
    ...state,
    userData: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [SIGN_UP_SUCCESS]: (state, action) => ({
    ...state,
    userData: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [SIGN_UP_FAILURE]: (state, action) => ({
    ...state,
    userData: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default user;
