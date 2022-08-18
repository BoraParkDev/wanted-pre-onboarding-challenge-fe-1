import { createAsyncAction } from 'typesafe-actions';
import { UserData } from '../../api/auth/login';
import { AxiosError } from 'axios';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';
export const LOG_OUT = 'user/LOG_OUT';

export const getUserDataeAsync = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT
)<undefined, UserData, AxiosError, null>();
