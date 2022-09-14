import type { User } from 'firebase/auth';
import { createContext, ReactNode } from 'react';

import { useAuthState } from '@/hooks/useAuthState';

type AuthContextValueType = {
  currentUser: User | null | undefined;
};

export const AuthContext = createContext<AuthContextValueType>({ currentUser: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser] = useAuthState();

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
