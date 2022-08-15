import produce from 'immer';
import { LOG_IN_REQUEST } from '../actions/user';
import { LOG_IN_SUCCESS } from '../actions/user';
import { LOG_IN_FAILURE } from '../actions/user';
import { LOG_OUT } from '../actions/user';

const initialState = {
  data: null,
  isLoggingIn: false,
};

export const userReducer = (
  prevState = initialState,
  action: { type: string; data: null }
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
