import { createContext, useState } from 'react';
import { api } from '../../api/api';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: JSX.Element;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      const response = await api.login(username, password);
      if (response.success) {
        setIsLoggedIn(true);
        localStorage.setItem('token', response.token);
      } else {
        alert(
          'Falha na autenticação. Verifique suas credenciais e tente novamente.',
        );
      }
    } catch (error) {
      console.log('Erro durante a autenticação:', error);
      alert(
        'Ocorreu um erro durante a autenticação. Por favor, tente novamente mais tarde.',
      );
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
