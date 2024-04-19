import { createContext, ReactNode, useCallback, useState } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'user';
}

interface Admin {
  id: string;
  username: string;
  email: string;
  role: 'admin';
}

// Union type for AuthenticatedUser
type AuthenticatedUser = User | Admin;

interface AuthState {
  isAuthenticated: boolean;
  user?: AuthenticatedUser;
  token?: string;
}

interface AuthContextType extends AuthState {
  login: (
    username: string,
    password: string,
    type: 'user' | 'admin'
  ) => Promise<void>;
  signup: (
    fullName: string,
    email: string,
    type: 'user' | 'admin'
  ) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

const apiUrl = import.meta.env.VITE_API_URL;

function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
  });

  const login = useCallback(
    async (username: string, password: string, type: 'user' | 'admin') => {
      const url =
        type === 'admin' ? `${apiUrl}/admin/login` : `${apiUrl}/user/login`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
      } catch (error) {}
    },
    []
  );
}

export default AuthProvider;
