import axios from "axios";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useAuth } from "./authProvider";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const { token } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://backendblogapi-production.up.railway.app/api/users/self",
        );

        setUser(response.data);
      } catch (err) {
        return;
      }
    };
    if (token) {
      getUser();
    }
  }, []);

  const contextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
