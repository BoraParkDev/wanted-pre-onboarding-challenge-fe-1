export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

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
