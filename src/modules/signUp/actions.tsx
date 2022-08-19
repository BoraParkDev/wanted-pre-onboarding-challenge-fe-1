import { createAsyncAction } from 'typesafe-actions';
import { UserData } from '../../api/auth/login';
import { AxiosError } from 'axios';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const getUserDataeAsync = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
)<undefined, UserData, AxiosError>();
