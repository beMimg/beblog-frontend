import axios from "axios";
import { useEffect, useState } from "react";
import { useTheme } from "../context/themeProvider";
import getColor from "../functions/getColor";
import ColorModal from "../components/ColorModal";

export default function UserProfile() {
  const [user, setUser] = useState();
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const { setTheme } = useTheme();

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
  const color = getColor(user.user.color);

  function handleClick() {
    setIsColorModalOpen(true);
  }

  return (
    <div className="p-4">
      {user && (
        <div className="flex h-full flex-col items-center justify-center gap-4 pt-4">
          <div
            onClick={handleClick}
            className={`h-20 w-20 cursor-pointer rounded-full border-2 ${color}`}
          ></div>
          {isColorModalOpen && (
            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <ColorModal
                setIsColorModalOpen={setIsColorModalOpen}
                user={user}
              />
            </div>
          )}
          <p className="text-4xl  font-semibold">{user.user.username}</p>
          <div className="flex flex-row gap-1">
            <h1>{user.user.first_name}</h1>
            <h1>{user.user.last_name}</h1>
          </div>
          <p>{user.user.email}</p>
          <button className="themeButton rounded-lg px-6 py-1">
            Edit Profile
          </button>
        </div>
      )}
      <button
        className="themeButton absolute bottom-4 rounded-md px-2 py-0.5"
        onClick={setTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
