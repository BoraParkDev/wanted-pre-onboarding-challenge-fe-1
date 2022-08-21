import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../redux/modules/user';

//action 정의

export const addUserAsync = createAsyncThunk('ADD_USER', async (user: User) => {
  const response = await axios.post('http://localhost:8080/users/create', user);
  return response.data;
});

export const setUserAsync = createAsyncThunk(
  'SET_USER',
  async (user: User): Promise<User> => {
    const response = await axios.get('http://localhost:8080/users/login');
    return response.data;
  }
);
