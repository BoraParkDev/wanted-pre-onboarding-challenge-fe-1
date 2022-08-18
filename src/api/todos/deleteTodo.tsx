import axios from 'axios';

export async function deleteTodoList() {
  const response = await axios.delete<DeleteTodo>(
    `http://localhost:8080/todos/:id`
  );
  return response.data;
}

export interface DeleteTodo {
  data: null;
}
