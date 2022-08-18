import axios from 'axios';

export async function getUserData() {
  const response = await axios.get<UserData>(
    `http://localhost:8080/users/login`
  );
  return response.data; //데이터 값 반환
}

export interface UserData {
  //제네릭으로 response 데이터 타입 설정
  email: null;
  password: null;
}
