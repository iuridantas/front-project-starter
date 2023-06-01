import { createContext, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { User } from '../../utils/types/requests';

interface UserContextProps {
  user: User | undefined;
  tokenId: string;
  setUser: (user: User) => void;
  setTokenId: (token: string) => void;
}

interface UserContextProviderProps {
  children: JSX.Element;
}

const DEFAULT_VALUE: UserContextProps = {
  setUser: () => {},
  setTokenId: () => {},
  user: undefined,
  tokenId: '',
};

export const UserContext = createContext<UserContextProps>(DEFAULT_VALUE);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(DEFAULT_VALUE.user);
  const [tokenId, setTokenId] = useState<string>(DEFAULT_VALUE.tokenId);

  const getToken = localStorage.getItem('token');

  useEffect(() => {
    if (getToken || tokenId !== '') {
      api.auth(getToken || tokenId).then((res) => setUser(res));
    }
  }, [tokenId]);

  return (
    <UserContext.Provider value={{ user, setUser, tokenId, setTokenId }}>
      {children}
    </UserContext.Provider>
  );
};
