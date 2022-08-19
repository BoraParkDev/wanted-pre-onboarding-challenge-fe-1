import axios from 'axios';

export async function postUserData() {
  const response = await axios.post<PostUserData>(
    `http://localhost:8080/users/create`
  );
  return response.data;
}

export interface PostUserData {
  //제네릭으로 response 데이터 타입 설정
  message: null;
  token: null;
}
