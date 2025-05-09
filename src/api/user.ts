import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUser = (email: string) => {
  return client.get<User[]>(`/users?email=${email}`);
};

export const createUser = (
  data: Pick<User, 'name' | 'email' | 'phone' | 'username'>,
) => {
  return client.post<User>(`/users`, data);
};
