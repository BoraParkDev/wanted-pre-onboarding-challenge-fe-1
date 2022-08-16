export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE' as const;
export const LOG_OUT = 'user/LOG_OUT';

export const logInRequest = (data: object) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logInSuccess = (data: object) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

export const logInFailure = (error: object) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logOut = (data: object) => {
  return {
    type: LOG_OUT,
    data,
  };
};
