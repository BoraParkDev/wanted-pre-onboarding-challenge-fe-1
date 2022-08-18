import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { UserData } from '../../api/auth/login';

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: UserData | null;
  };
};
