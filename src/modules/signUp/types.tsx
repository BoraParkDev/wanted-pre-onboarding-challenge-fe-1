import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { PostUserData } from '../../api/auth/signUp';

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  userData: {
    loading: boolean;
    error: Error | null;
    data: PostUserData | null;
  };
};
