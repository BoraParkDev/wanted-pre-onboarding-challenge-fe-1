import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { UserAction } from './types';
import { getUserData } from '../../api/auth/login';
import { getUserDataeAsync } from './actions';
import { AxiosError } from 'axios';

export function getUserProfileThunk(): ThunkAction<
  void,
  RootState,
  null,
  UserAction
> {
  return async (dispatch) => {
    const { request, success, failure } = getUserDataeAsync;
    dispatch(request());
    try {
      const userProfile = await getUserData();
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e as AxiosError));
    }
  };
}
