import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ResponseType, User } from '../redux/modules/user';

//action 정의

export const addUserAsync = createAsyncThunk('ADD_USER', async (user: User) => {
  const response = await axios.post('http://localhost:8080/users/create', user);
  return response.data;
});

export const setUserAsync = createAsyncThunk(
  'SET_USER',
  async (user: User): Promise<ResponseType> => {
    const response = await axios.post(
      'http://localhost:8080/users/login',
      {
        email: user.email,
        password: user.password,
      },
      {
        headers: {},
      }
    );
    return response.data;
  }
);
