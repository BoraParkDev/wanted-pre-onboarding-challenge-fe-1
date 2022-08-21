import { createSlice } from '@reduxjs/toolkit';
import { setUserAsync } from '../../api/user';
import { RootState } from '../configStore';

export interface User {
  email: string;
  password: string;
}

const initialState: User = {
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus(state, action) {
      state.email = '';
      state.password = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default userSlice.reducer;
export const getUserProfile = (state: RootState) => state.user;
