import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2472;

export const getTodos = (userId: number | null) => {
  if (!userId) {
    throw new Error('Error');
  }

  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const createTodo = (data: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, data);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const updateTodo = (id: number, data: Omit<Todo, 'id'>) => {
  return client.patch<Todo>(`/todos/${id}`, data);
};
// Add more methods here
