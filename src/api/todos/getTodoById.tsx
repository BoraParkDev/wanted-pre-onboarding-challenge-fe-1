import axios from 'axios';

export async function getTodoById() {
  const response = await axios.get<GetTodoByID>(
    `http://localhost:8080/todos/:id`
  );
  return response.data;
}

export interface GetTodoByID {
  data: Data;
}

export interface Data {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
