import { PropsWithChildren, createContext, useMemo, useState } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  updateLoggedInState: VoidFunction;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateLoggedInState = () => {
    setIsLoggedIn(true);
  };
  const [currentStep, setCurrentStep] = useState(1);
  const values = useMemo(
    () => ({ isLoggedIn, updateLoggedInState, currentStep, setCurrentStep }),
    [setCurrentStep, currentStep],
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
