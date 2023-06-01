import React from 'react';
import { UserContextProvider } from './userContext';
import { AuthContextProvider } from './authContext';

interface GlobalContextProps {
  children: React.ReactElement;
}

const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  return (
    <UserContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </UserContextProvider>
  );
};

export default GlobalContext;
