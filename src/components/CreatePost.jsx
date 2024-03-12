import { IoClose } from "react-icons/io5";

export default function CreatePost({ setIsCreatePostOpen }) {
  return (
    <div className="w-full">
      <h1 className="mb-4 text-center text-xl font-semibold text-white">
        Create Post
      </h1>
      <IoClose
        className="absolute right-3 top-3 z-50 cursor-pointer text-4xl"
        onClick={() => setIsCreatePostOpen(false)}
      />

      <form className="flex flex-col gap-4 text-black">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="inputStyleDefault"
        />
        <input
          type="text"
          name="topic"
          placeholder="Topic"
          className="inputStyleDefault"
        />
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          className="inputStyleDefault"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
