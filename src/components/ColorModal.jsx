import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import editProfile from "../functions/editProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const colors = [
  { name: "red", style: "bg-red-400" },
  { name: "blue", style: "bg-blue-400" },
  { name: "green", style: "bg-green-400" },
  { name: "purple", style: "bg-purple-400" },
  { name: "orange", style: "bg-orange-400" },
  { name: "gray", style: "bg-gray-400" },
  { name: "pink", style: "bg-pink-400" },
];

export default function ColorModal({ setIsColorModalOpen, user }) {
  const [color, setColor] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/users/${user.user._id}/update-color`,
        { color },
      );
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
  return (
    <form
      className="themeModal relative flex w-[90%] flex-col items-center gap-4 rounded-lg bg-slate-300 p-3"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg font-semibold">Pick a profile color:</h1>
      <IoIosClose
        className="absolute right-2 top-2 cursor-pointer text-4xl"
        onClick={() => setIsColorModalOpen(false)}
      />

      <div className=" grid grid-cols-4 gap-2 p-3">
        {colors &&
          colors.map((color) => (
            <button
              type="button"
              key={color.name}
              onClick={() => setColor(color.name)}
              className={`${color.style} custom-btn h-[60px] w-[60px] rounded-full border-black focus:border-4`}
            ></button>
          ))}
      </div>
      <button
        type="submit "
        className="themeModalButton self-center rounded-md px-4 py-2"
        disabled={!color}
      >
        Submit changes
      </button>
    </form>
  );
}
