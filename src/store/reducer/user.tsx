import produce from 'immer';
import {
  logInRequest,
  logInSuccess,
  logInFailure,
  logOut,
} from '../actions/user';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from '../actions/user';

type UserState = {
  data: null | object;
  isLoggingIn: boolean;
};

type UserAction =
  | ReturnType<typeof logInRequest>
  | ReturnType<typeof logInSuccess>
  | ReturnType<typeof logInFailure>
  | ReturnType<typeof logOut>;

const initialState: UserState = {
  data: null,
  isLoggingIn: false,
};

export const userReducer = (
  prevState: UserState = initialState,
  action: UserAction
) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};
