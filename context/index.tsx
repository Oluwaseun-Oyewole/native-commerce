import { PropsWithChildren, createContext, useMemo, useState } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  updateLoggedInState: VoidFunction;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateLoggedInState = () => {
    setIsLoggedIn(true);
  };
  const values = useMemo(
    () => ({ isLoggedIn, updateLoggedInState }),
    [updateLoggedInState],
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
