import { useState } from "react";
import getColor from "../functions/getColor";
import ColorModal from "../components/ColorModal";
import { useUser } from "../context/userProvider";
import { useAuth } from "../context/authProvider";
import { useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import Loading from "../components/Loading";
import { useTheme } from "../context/themeProvider";

export default function UserProfile() {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const { setToken } = useAuth();
  const { user, setUser } = useUser();
  const { setTheme } = useTheme();
  const navigation = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loading />
      </div>
    );
  }
  const color = getColor(user.user.color);

  function handleClick() {
    setIsColorModalOpen(true);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    navigation("/");
    setToken();
    setUser();
    window.location.reload();
  }

  return (
    <div className="animate-fade-in p-4">
      {user && (
        <div className="flex h-full flex-col items-center justify-center gap-4 pt-4">
          <div
            onClick={handleClick}
            className={`h-20 w-20 cursor-pointer rounded-full border-2 ${color} transition-all hover:scale-125`}
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
          {user.user.admin && (
            <button
              className="themeButton animate-fade-in rounded-lg  px-6 py-1 transition-all hover:scale-105"
              onClick={() => setIsCreatePostOpen(true)}
            >
              Create a Post
            </button>
          )}
          <button
            onClick={handleLogout}
            className="themeButton animate-fade-in rounded-lg px-6 py-1 transition-all hover:scale-105"
          >
            Logout
          </button>
          {isCreatePostOpen && (
            <div className="absolute left-0  top-0 z-20 flex h-full w-full justify-center bg-black bg-opacity-90 p-4 pt-20">
              <CreatePost setIsCreatePostOpen={setIsCreatePostOpen} />
            </div>
          )}
          <button
            className="themeButton animate-fade-in rounded-lg px-6  py-1 transition-all hover:scale-105"
            onClick={setTheme}
          >
            Toggle Theme
          </button>
        </div>
      )}
    </div>
  );
}
