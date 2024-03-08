import { IoIosClose } from "react-icons/io";

const colors = [
  { name: "red", style: "bg-red-400" },
  { name: "blue", style: "bg-blue-400" },
  { name: "green", style: "bg-green-400" },
  { name: "purple", style: "bg-purple-400" },
  { name: "orange", style: "bg-orange-400" },
  { name: "gray", style: "bg-gray-400" },
  { name: "pink", style: "bg-pink-400" },
];

export default function ColorModal({ setIsColorModalOpen }) {
  return (
    <form className="themeModal relative flex w-[90%] flex-col items-center gap-4 rounded-lg bg-slate-300 p-3 ">
      <h1 className="text-lg font-semibold">Pick a profile color:</h1>
      <IoIosClose
        className="absolute right-2 top-2 text-4xl"
        onClick={() => setIsColorModalOpen(false)}
      />

      <div className=" grid grid-cols-4 gap-2 p-3">
        {colors &&
          colors.map((color) => (
            <button
              type="button"
              key={color.name}
              className={`${color.style} custom-btn h-[60px] w-[60px] rounded-full border-black focus:border-4`}
            ></button>
          ))}
      </div>
      <button
        type="submit "
        className="themeModalButton self-center rounded-md px-4 py-2"
      >
        Submit changes
      </button>
    </form>
  );
}
