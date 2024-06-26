import { createContext, ReactNode, useCallback, useState } from 'react';

interface User {
  id: string;
  username: string;
  temporaryPassword?: string;
  role: 'user' | 'admin';
}

interface AuthState {
  isAuthenticated: boolean;
  user?: User;
  token?: string;
  isFirstLogin?: boolean;
  message?: string;
}

interface LoginResponse {
  userId: string;
  username: string;
  role: 'user' | 'admin';
  token: string;
  isFirstLogin: boolean;
  message: string;
  errMessage?: string;
  errData?: string[];
}

interface SignupResponse {
  user: User;
  message: string;
  errMessage?: string;
  errData?: string[];
}

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<void>;
  signup: (
    fullName: string,
    email: string,
    role: 'user' | 'admin'
  ) => Promise<void>;
  updatePassword: (username: string, newPassword: string) => Promise<void>;
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

  const login = useCallback(async (username: string, password: string) => {
    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data: LoginResponse = await response.json();
      if (response.ok) {
        setAuthState({
          isAuthenticated: true,
          user: { id: data.userId, username, role: data.role },
          token: data.token,
          isFirstLogin: data.isFirstLogin,
          message: data.message,
        });
        localStorage.setItem('token', data.token);
      } else {
        throw new Error(data.errMessage || 'Authentication Failed!');
      }
    } catch (error) {
      console.error('Login Error', error);
    }
  }, []);

  const signup = useCallback(
    async (fullName: string, email: string, role: 'user' | 'admin') => {
      try {
        const res = await fetch(`${apiUrl}/auth/signup`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, role }),
        });

        const data: SignupResponse = await res.json();
        if (res.ok) {
          setAuthState({
            isAuthenticated: false,
            user: data.user,
            message: data.message,
          });
        } else {
          throw new Error(data.errMessage || 'Signup Failed!');
        }
      } catch (error) {
        console.error('Login Error', error);
      }
    },
    []
  );

  const updatePassword = useCallback(
    async (username: string, newPassword: string) => {
      const res = await fetch(`${apiUrl}/auth/update-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, newPassword }),
      });
      const data = await res.json();

      if (res.ok) {
        setAuthState((prevState) => {
          return { ...prevState, isFirstLogin: false, message: data.message };
        });
      } else {
        throw new Error(data.errMessage || 'Password to update password!');
      }
    },
    []
  );

  const logout = useCallback(async () => {
    setAuthState({ isAuthenticated: false });
    localStorage.removeItem('token');
  }, []);

  const authContextValue: AuthContextType = {
    ...authState,
    login,
    signup,
    updatePassword,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
