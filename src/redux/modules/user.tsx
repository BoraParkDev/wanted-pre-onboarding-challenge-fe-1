import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setUserAsync } from '../../api/user';
import { RootState } from '../configStore';

export interface User {
  email: string;
  password: string;
}

export interface ResponseType {
  message: string;
  token: string;
  user: User;
  error: { details: string };
}

const initialState = {
  message: '',
  token: '',
  user: { email: '', password: '' },
  error: { details: '' },
} as ResponseType;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus(state, action) {
      state.message = '';
      state.token = '';
      state.user.email = '';
      state.user.password = '';
      state.error.details = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(setUserAsync.pending, (state, action) => {});
    builder.addCase(setUserAsync.rejected, (state, action) => {
      console.log(state);
      console.log({ ...state, ...action });
    });
  },
});

export default userSlice.reducer;
export const getUserProfile = (state: RootState) => state.user;
