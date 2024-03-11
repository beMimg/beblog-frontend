import axios from "axios";
import { createContext, useContext, useState, useMemo, useEffect } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/users/self",
        );

        setUser(response.data);
      } catch (err) {
        return;
      }
    };
    getUser();
  }, []);

  const contextValue = useMemo(() => {
    return { user };
  }, [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
