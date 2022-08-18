import axios from 'axios';
import { UserData } from './login';

export async function postUserData() {
  const response = await axios.post<UserData>(
    `http://localhost:8080/users/create`
  );
  return response.data;
}
