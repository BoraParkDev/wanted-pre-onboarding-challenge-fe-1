import axios from 'axios';

export async function updateTodoList() {
  const response = await axios.post<UpdateTodo>(
    `http://localhost:8080/todos/:id`
  );
  return response.data;
}

export interface UpdateTodo {
  data: Data;
}

export interface Data {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
