import axios from 'axios';

export async function createTodoList() {
  const response = await axios.post<CreateTodo>(`http://localhost:8080/todos`);
  return response.data;
}

export interface CreateTodo {
  data: Data;
}

export interface Data {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
