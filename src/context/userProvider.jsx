import axios from "axios";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useAuth } from "./authProvider";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const { token } = useAuth();

  // Since this is a Provider, default axios headers set on authProvider, will not be in this request.
  // For this reason, hardcode the header for the user.

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://backendblogapi-production.up.railway.app/api/users/self",
          config,
        );

        setUser(response.data);
      } catch (err) {
        return;
      }
    };
    getUser();
  }, [token]);

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
