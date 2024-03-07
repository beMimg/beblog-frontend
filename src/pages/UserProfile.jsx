import axios from "axios";
import { useEffect, useState } from "react";

export default function UserProfile() {
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

  if (!user) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {user && (
        <div>
          <p className="text-4xl  font-semibold">{user.user.username}</p>
          <div className="flex flex-row gap-2">
            <h1>{user.user.first_name}</h1>
            <h1>{user.user.last_name}</h1>
          </div>
          <p>{user.user.email}</p>
        </div>
      )}
    </div>
  );
}
