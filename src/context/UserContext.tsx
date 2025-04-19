import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { User } from '../types/User';

type TypeContext = {
  user: User | null;
  setUser: (value: User | null) => void;
};

export const UserContext = createContext<TypeContext>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>(null, 'user');

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
