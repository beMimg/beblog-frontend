import { useState } from "react";
import { useTheme } from "../context/themeProvider";
import getColor from "../functions/getColor";
import ColorModal from "../components/ColorModal";
import { useUser } from "../context/userProvider";
import { useAuth } from "../context/authProvider";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const { setToken } = useAuth();
  const { setTheme } = useTheme();
  const { user, setUser } = useUser();
  const navigation = useNavigate();

  console.log(user);

  if (!user) {
    return <p>Loading</p>;
  }
  const color = getColor(user.user.color);

  function handleClick() {
    setIsColorModalOpen(true);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigation("/");
    setToken();
    setUser();
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
          <button
            onClick={handleLogout}
            className="themeButton rounded-lg px-6 py-1"
          >
            Logout
          </button>
          {user.user.admin && <p>hi</p>}
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
