import { AuthContext, AuthContextType } from "@/context";
import { useContext } from "react";

const useAuth = () => {
  const auth: AuthContextType = useContext(AuthContext)!;
  if (!auth) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }
  return {
    ...auth,
  };
};

export default useAuth;
