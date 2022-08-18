import axios from 'axios';

export async function getTodoLists() {
  const response = await axios.get<GetTodos>(`http://localhost:8080/todos`);
  return response.data;
}

export interface GetTodos {
  data: Datum[];
}

export interface Datum {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
