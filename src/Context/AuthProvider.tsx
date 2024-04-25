import { createContext, ReactNode } from 'react';
import useFirebase from '../firebase/useFirebase';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>(null); // Update the type accordingly

const AuthProvider = ({ children }: AuthProviderProps) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
